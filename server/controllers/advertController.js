const Advert = require('../models/advertModel');
const APIFeatures = require('../utils/apiFeatures');

/**
 * Generate API Documentation with apidoc
 */

/**
 * @api {get} /api/v1/adverts List all adverts
 * @apiGroup Adverts
 * @apiSuccess {String} status Status response
 * @apiSuccess {Date} requestedAt Request date/time
 * @apiSuccess {Number} results Number of adverts
 * @apiSuccess {Object[]} data.adverts Adverts's list
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "success",
 *      "requestedAt": "2020-09-10T10:55:52.067Z",
 *      "results": 8,
 *      "data": {
 *      "adverts": [
 *           {
 *               "sale": true,
 *               "tags": [
 *                   "lifestyle",
 *                   "motor"
 *               ],
 *               "_id": "5f59fc8f53bab60f7d995367",
 *               "name": "Bicicleta",
 *               "price": 230.15,
 *               "tinyDescription": "Ut enim ad minim veniam, quis nostrud exercitation ullamco...",
 *               "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
 *               "image": "bici.jpg"
 *           }, ...
 *         ]
 *      }
 *    }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 404 Not Found
 *    {
 *      "status": "fail",
 *      "code": 404,
 *      "message": "Not Found"
 *    }
 */
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
    next(err);
  }
};

/**
 * @api {get} /api/v1/adverts/:id Find an advert
 * @apiGroup Adverts
 * @apiParam {id} id Advert id
 * @apiSuccess {String} status Status response
 * @apiSuccess {Date} requestedAt Request date/time
 * @apiSuccess {Object} data.advert Advert data
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "success",
 *      "requestedAt": "2020-09-10T10:55:52.067Z",
 *      "results": 8,
 *      "data": {
 *          "advert": {
 *              "sale": true,
 *              "tags": [
 *                  "lifestyle",
 *                  "motor"
 *                ],
 *              "_id": "5f59fc8f53bab60f7d995367",
 *              "name": "Bicicleta",
 *              "price": 230.15,
 *              "tinyDescription": "Ut enim ad minim veniam, quis nostrud exercitation ullamco...",
 *              "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
 *              "image": "bici.jpg",
 *              "__v": 0
 *          }
 *       }
 *    }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 404 Not Found
 *    {
 *      "status": "fail",
 *      "code": 404,
 *      "message": "Cast to ObjectId failed for value \"5f5s9fc8f53bab60f7d995367\" at path \"_id\" for model \"Advert\""
 *    }
 */

const getAdvertById = async (req, res, next) => {
  try {
    const advert = await Advert.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      data: {
        advert: advert,
      },
    });
  } catch (err) {
    err.status = 404;
    next(err);
  }
};

/**
 * @api {post} /api/v1/adverts/ Create an advert
 * @apiGroup Adverts
 * @apiParam {file} image Advert file image (jpg/png)
 * @apiParam {String} name Advert name
 * @apiParam {Number} price Advert price
 * @apiParam {String} description Advert description
 * @apiParam {Boolean} sale Advert type (to sale:true, to buy: false)
 * @apiParam {String[]} tags Advert tags (work, mobile, lifestyle, motor)
 * @apiParamExample {json} Input
 *    {
 *      "image": "telefono.jpg",
 *      "name": "Telefono movil",
 *      "price": 234,
 *      "description": "ddfkedkfekfekfkekfekkek",
 *      "sale": "false",
 *      "tags": "mobile"
 *    }
 * @apiSuccess {String} status Status response
 * @apiSuccess {Date} requestedAt Request date/time
 * @apiSuccess {Object} data.advert Advert data created
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 201 OK
 *    {
 *      "status": "success",
 *      "requestedAt": "2020-09-10T10:55:52.067Z",
 *      "results": 8,
 *      "data": {
 *          "advert": {
 *              "sale": true,
 *              "tags": [
 *                  "lifestyle",
 *                  "motor"
 *                ],
 *              "createdAt": "2020-09-10T12:39:49.460Z",
 *              "_id": "5f5a1e9e30f0ba17c4110cbe",
 *              "name": "Telefono movil",
 *              "price": 234,
 *              "description": "ddfkedkfekfekfkekfekkek",
 *              "tinyDescription": "ddfkedkfekfekfkekfekkek...",
 *              "image": "image_1599741598878_20200812_115221.jpg",
 *              "__v": 0
 *          }
 *       }
 *    }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 422 Unprocessable Entity
 *    {
 *      "status": "fail",
 *      "code": 422,
 *      "message": "\n- name: Product must have a name"
 *    }
 */

const createAdvert = async (req, res, next) => {
  try {
    // console.log(req.file);
    // console.log(req.body);

    if (req.body.description) {
      req.body.tinyDescription = `${req.body.description.substring(0, 40)}...`;
    }

    if (req.file) {
      req.body.image = req.file.filename;
    }

    //console.log(req.body);

    const newAdvert = await Advert.create(req.body);

    res.status(201).json({
      status: 'success',
      requestedAt: req.requestTime,
      data: {
        advert: newAdvert,
      },
    });
  } catch (err) {
    err.status = 422;
    next(err);
  }
};

/**
 * @api {put} /api/v1/adverts/:id Update an advert
 * @apiGroup Adverts
 * @apiParam {id} id Advert id
 * @apiParam {String} name Advert name
 * @apiParam {Number} price Advert price
 * @apiParamExample {json} Input
 *    {
 *      "name": "Telefono movil actualizado",
 *      "price": 154,
 *    }
 * @apiSuccess {String} status Status response
 * @apiSuccess {Date} requestedAt Request date/time
 * @apiSuccess {Object} data.advert Advert data updated
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "success",
 *      "requestedAt": "2020-09-10T10:55:52.067Z",
 *      "results": 8,
 *      "data": {
 *          "advert": {
 *              "sale": true,
 *              "tags": [
 *                  "lifestyle",
 *                  "motor"
 *                ],
 *              "createdAt": "2020-09-10T12:39:49.460Z",
 *              "_id": "5f5a1e9e30f0ba17c4110cbe",
 *              "name": "Telefono movil actualizado",
 *              "price": 154,
 *              "description": "ddfkedkfekfekfkekfekkek",
 *              "tinyDescription": "ddfkedkfekfekfkekfekkek...",
 *              "image": "image_1599741598878_20200812_115221.jpg",
 *              "__v": 0
 *          }
 *       }
 *    }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 422 Unprocessable Entity
 *    {
 *      "status": "fail",
 *      "code": 422,
 *      "message": "Validation failed: price: An advert must have a price"
 *    }
 */

const updateAdvertById = async (req, res, next) => {
  try {
    const advert = await Advert.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      data: {
        advert,
      },
    });
  } catch (err) {
    err.status = 422;
    next(err);
  }
};

/**
 * @api {delete} /api/v1/adverts/:id Delete an advert
 * @apiGroup Adverts
 * @apiParam {id} id Advert id
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 204 No Content
 * @apiErrorExample {json} List error
 *    HTTP/1.1 404 Not Found
 *    {
 *      "status": "fail",
 *      "code": 404,
 *      "message": "Cast to ObjectId failed for value \"5f5a1e9e30fd0ba17c4110cbe\" at path \"_id\" for model \"Advert\""
 *    }
 */

const deleteAdvertById = async (req, res, next) => {
  try {
    await Advert.findByIdAndRemove(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    err.status = 404;
    next(err);
  }
};

/**
 * @api {get} /api/v1/adverts/tags/ Find all exist tags
 * @apiGroup Adverts
 * @apiSuccess {String} status Status response
 * @apiSuccess {Date} requestedAt Request date/time
 * @apiSuccess {String[]} data.tags Adverts tags list in DB
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "success",
 *      "requestedAt": "2020-09-10T10:55:52.067Z",
 *      "data": {
 *      "tags": [
 *           "lifestyle",
 *           "mobile",
 *           "motor",
 *           "work"
 *        ]
 *      }
 *    }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 404 Not Found
 *    {
 *      "status": "fail",
 *      "code": 404,
 *      "message": "Not Found"
 *    }
 */

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

module.exports = {
  getAllAdverts,
  getAllExistTags,
  createAdvert,
  getAdvertById,
  updateAdvertById,
  deleteAdvertById,
};
