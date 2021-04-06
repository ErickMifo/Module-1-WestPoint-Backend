const mongoose = require('mongoose');

const Graph = mongoose.model('Graph');

module.exports = {
  async index(req, res) {
    const graps = await Graph.find();
    return res.json(graps);
  },
  async show(req, res) {
    const graph = await Graph.findById(req.params.id);
    return res.json(graph);
  },
  async store(req, res) {
    const graph = await Graph.create(req.body);
    return res.json(graph);
  },
  async update(req, res) {
    const graph = await Graph.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(graph);
  },
};
