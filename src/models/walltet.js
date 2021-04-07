const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
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

const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = { Wallet };
