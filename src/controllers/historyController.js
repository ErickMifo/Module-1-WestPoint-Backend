const mongoose = require('mongoose');

const History = mongoose.model('History');

module.exports = {
  async index(req, res) {
    const historys = await History.find();
    return res.json(historys);
  },
  async show(req, res) {
    const history = await History.findById(req.params.id);
    return res.json(history);
  },
  async store(req, res) {
    const history = await History.create(req.body);
    return res.json(history);
  },
  async update(req, res) {
    const history = await History.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(history);
  },
  async destroy(req, res) {
    // eslint-disable-next-line no-unused-vars
    const history = await History.findOneAndRemove(req.params.id);
    return res.send();
  },

};
