const Advert = require('../models/advertModel');
const APIFeatures = require('../utils/apiFeatures');

const getAllAdverts = async (req, res, next) => {
  try {
    const features = new APIFeatures(Advert.find(), req.query)
      .filter()
      .sort()
      .limitFields()
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
    err.status = 404;
    next(err);
  }
};

const getAllExistTags = async (req, res, next) => {
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
    err.status = 404;
    next(err);
  }
};

const getAdvertById = async (req, res, next) => {
  try {
    const advert = await Advert.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        advert: advert,
      },
    });
  } catch (err) {
    err.status = 404;
    next(err);
  }
};

const createAdvert = async (req, res, next) => {
  try {
    // console.log(req.body);
    // console.log(req.file);

    req.body.tinyDescription = `${req.body.description.substring(0, 40)}...`;

    req.body.tags = req.body.tags.split(',');

    if (req.file) {
      req.body.image = req.file.filename;
    }

    const newAdvert = await Advert.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        advert: newAdvert,
      },
    });
  } catch (err) {
    next(err);
  }
};

const updateAdvertById = async (req, res, next) => {
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
    err.status = 400;
    next(err);
  }
};

const deleteAdvertById = async (req, res, next) => {
  try {
    await Advert.findByIdAndRemove(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

module.exports = {
  getAllAdverts,
  getAllExistTags,
  createAdvert,
  getAdvertById,
  updateAdvertById,
  deleteAdvertById,
};
