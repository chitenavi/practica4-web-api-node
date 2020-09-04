import express from 'express';

import Advert from '../models/advertModel';
import APIFeatures from '../utils/apiFeatures';

const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const features = new APIFeatures(Advert.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const adverts = await features.query;

    res.render('index', { title: 'Nodepop', adverts });
  } catch (err) {
    next(err);
  }
});

/* GET detail product page. */
router.get('/adverts/:id', async (req, res, next) => {
  // EXECUTE QUERY
  try {
    const advert = await Advert.findById(req.params.id);
    res.render('advertdetail', { title: advert.name, advert });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
