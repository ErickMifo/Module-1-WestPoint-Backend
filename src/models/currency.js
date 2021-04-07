const mongoose = require('mongoose');

const currencySchema = new mongoose.Schema({
  USD: {
    type: Number,
  },
  GBP: {
    type: Number,
  },
  _id: {
    type: Number,
  },
});

const Currency = mongoose.model('Currency', currencySchema);

module.exports = { Currency };
