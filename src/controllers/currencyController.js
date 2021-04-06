const mongoose = require('mongoose');

const Currency = mongoose.model('Currency');

module.exports = {
  async index(req, res) {
    const currencies = await Currency.find();
    return res.json(currencies);
  },
  async show(req, res) {
    const currency = await Currency.findById(req.params.id);
    return res.json(currency);
  },
  async store(req, res) {
    const currency = await Currency.create(req.body);
    return res.json(currency);
  },
  async update(req, res) {
    const currency = await Currency.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(currency);
  },
  async destroy(req, res) {
    // eslint-disable-next-line no-unused-vars
    const currency = await Currency.findOneAndRemove(req.params.id);
    return res.send();
  },
};
