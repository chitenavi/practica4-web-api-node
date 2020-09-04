import express from 'express';

import {
  getAllAdverts,
  getAllExistTags,
  createAdvert,
  getAdvertById,
  updateAdvertById,
  deleteAdvertById,
} from '../../controllers/advertController';

const router = express.Router();

/* GET /api/v1/adverts */
/* POST /api/v1/adverts */
router.route('/').get(getAllAdverts).post(createAdvert);

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

export default router;
