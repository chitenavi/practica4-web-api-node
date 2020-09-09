const Advert = require('../models/advertModel');
const APIFeatures = require('../utils/apiFeatures');

const getHomePage = async (req, res, next) => {
  try {
    // GET all adverts, apply the received query string if it exists
    const features = new APIFeatures(Advert.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const adverts = await features.query;

    // Render home page with the obtained adverts
    res.render('index', { title: 'Nodepop', adverts });
  } catch (err) {
    err.status = 404;
    next(err);
  }
};

const getDetailAdvPage = async (req, res, next) => {
  try {
    // Obtain advert by id param
    const advert = await Advert.findById(req.params.id);

    // Render detail page with more info
    res.render('advertdetail', { title: advert.name, advert });
  } catch (err) {
    err.status = 404;
    next(err);
  }
};

const getNewAdvPage = async (req, res, next) => {
  try {
    res.render('newadvert', { title: 'Nuevo Anuncio' });
  } catch (err) {
    err.status = 404;
    next(err);
  }
};

const createNewAdv = async (req, res, next) => {
  try {
    console.log(req.body);
    console.log(req.file);

    req.body.tinyDescription = `${req.body.description.substring(0, 40)}...`;

    req.body.tags = req.body.tags.split(',');

    if (req.file) {
      req.body.image = req.file.filename;
    }

    const newAdvert = await Advert.create(req.body);

    console.log(newAdvert);
    res.status(201).redirect('/');
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

module.exports = {
  getHomePage,
  getDetailAdvPage,
  getNewAdvPage,
  createNewAdv,
};
