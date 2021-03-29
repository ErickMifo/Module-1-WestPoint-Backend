const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  value: {
    type: Number,
  },
});

const History = mongoose.model('History', historySchema);

module.exports = History;
