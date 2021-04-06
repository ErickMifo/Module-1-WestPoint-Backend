const mongoose = require('mongoose');

const Wallet = mongoose.model('Wallet');

module.exports = {
  async index(req, res) {
    const wallets = await Wallet.find();
    return res.json(wallets);
  },
  async show(req, res) {
    const wallet = await Wallet.findById(req.params.id);
    return res.json(wallet);
  },
  async store(req, res) {
    const wallet = await Wallet.create(req.body);
    return res.json(wallet);
  },
  async update(req, res) {
    const wallet = await Wallet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(wallet);
  },
  async destroy(req, res) {
    // eslint-disable-next-line no-unused-vars
    const wallet = await Wallet.findOneAndRemove(req.params.id);
    return res.send();
  },
};
