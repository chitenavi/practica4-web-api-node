import Advert from '../models/advertModel';
import APIFeatures from '../utils/apiFeatures';

export const getAllAdverts = async (req, res, next) => {
  try {
    const features = new APIFeatures(Advert.find(), req.query)
      .filter()
      .limitFields()
      .sort()
      .paginate();
    const adverts = await features.query;

    //console.log(adverts);
    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      results: adverts.length,
      data: {
        adverts: adverts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
    // next(err);
  }
};

export const getAllExistTags = async (req, res, next) => {
  try {
    const existTags = await Advert.distinct('tags');

    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      data: {
        tags: existTags,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

export const getAdvertById = async (req, res, next) => {
  try {
    const advert = await Advert.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        advert: advert,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

export const createAdvert = async (req, res, next) => {
  try {
    const newAdvert = await Advert.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        advert: newAdvert,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

export const updateAdvertById = async (req, res, next) => {
  try {
    const advert = await Advert.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        advert,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

export const deleteAdvertById = async (req, res, next) => {
  try {
    await Advert.findByIdAndRemove(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

export default {
  getAllAdverts,
  getAllExistTags,
  createAdvert,
  getAdvertById,
  updateAdvertById,
  deleteAdvertById,
};
