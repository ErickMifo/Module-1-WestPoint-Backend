const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  history: {
    type: String,
  },
});

const History = mongoose.model('History', historySchema);

module.exports = { History };
