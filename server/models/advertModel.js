const mongoose = require('mongoose');
const APIFeatures = require('../utils/apiFeatures');

const advertSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'An advert must have a name'],
    index: true,
    trim: true,
  },
  sale: {
    type: Boolean,
    default: true,
    index: true,
  },
  price: {
    type: Number,
    required: [true, 'An advert must have a price'],
  },
  tinyDescription: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    required: [true, 'An advert must have an image'],
  },
  tags: {
    type: [String],
    index: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

advertSchema.statics.listAdverts = function (query, queryString) {
  const features = new APIFeatures(query, queryString)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  return features.query;
};

const Advert = mongoose.model('Advert', advertSchema);

module.exports = Advert;
