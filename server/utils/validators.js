const { check, validationResult } = require('express-validator/check');

const advertValidationRules = function () {
  return [
    // name is not empty
    check('name', 'Product must have a name').not().isEmpty(),
    // price must be a number
    check('price', 'Product must have a price').not().isEmpty(),
  ];
};

const validate = function (req, res, next) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

  //console.log(errors);
  return errors.throw();
};

module.exports = {
  advertValidationRules,
  validate,
};
