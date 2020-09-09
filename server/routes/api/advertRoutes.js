/**
 * API routes
 */

const express = require('express');

const { advertValidationRules, validate } = require('../../utils/validators');
const uploadAdvImg = require('../../controllers/uploadController');

const {
  getAllAdverts,
  getAllExistTags,
  createAdvert,
  getAdvertById,
  updateAdvertById,
  deleteAdvertById,
} = require('../../controllers/advertController');

// import functions from controller

const router = express.Router();

/* GET /api/v1/adverts */
/* POST /api/v1/adverts */
router
  .route('/')
  .get(getAllAdverts)
  .post(uploadAdvImg, advertValidationRules(), validate, createAdvert);

/* GET /api/v1/adverts/tags */
router.route('/tags').get(getAllExistTags);

/* GET /api/v1/adverts/id */
/* PATCH /api/v1/adverts/id */
/* DELETE /api/v1/adverts/id */
router
  .route('/:id')
  .get(getAdvertById)
  .patch(updateAdvertById)
  .delete(deleteAdvertById);

module.exports = router;
