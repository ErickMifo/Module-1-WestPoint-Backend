const mongoose = require('mongoose');

const graphSchema = new mongoose.Schema({
  USD: {
    type: Number,
  },
  GBP: {
    type: Number,
  },
  graphDate: {
    type: String,
  },
  _id: {
    type: Number,
  },
});

const Graph = mongoose.model('Graph', graphSchema);

module.exports = { Graph };
