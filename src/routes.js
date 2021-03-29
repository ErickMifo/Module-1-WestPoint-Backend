const express = require('express');

const routes = express.Router();

const historyController = require('./controllers/historyController');

routes.get('/history', historyController.index);
routes.get('/history/:id', historyController.show);
routes.post('/history', historyController.store);
routes.delete('/history/:id', historyController.destroy);

module.exports = routes;
