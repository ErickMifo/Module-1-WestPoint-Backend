const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  history: {
    type: String,
  },
});

const History = mongoose.model('History', historySchema);

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

module.exports = {
  History, Currency, Wallet, Graph,
};
