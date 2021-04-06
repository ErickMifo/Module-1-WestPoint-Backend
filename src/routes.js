const express = require('express');

const routes = express.Router();

const historyController = require('./controllers/historyController');
const currencyController = require('./controllers/currencyController');
const walletController = require('./controllers/walletController');
const graphController = require('./controllers/graphController');

routes.get('/history', historyController.index);
routes.get('/history/:id', historyController.show);
routes.post('/history', historyController.store);
routes.put('/history/:id', historyController.update);
routes.delete('/history/:id', historyController.destroy);

routes.get('/currency', currencyController.index);
routes.get('/currency/:id', currencyController.show);
routes.post('/currency', currencyController.store);
routes.put('/currency/:id', currencyController.update);
routes.delete('/currency/:id', currencyController.destroy);

routes.get('/wallet', walletController.index);
routes.get('/wallet/:id', walletController.show);
routes.post('/wallet', walletController.store);
routes.put('/wallet/:id', walletController.update);
routes.delete('/wallet/:id', walletController.destroy);

routes.get('/graph', graphController.index);
routes.get('/graph/:id', graphController.show);
routes.post('/graph', graphController.store);
routes.put('/graph/:id', graphController.update);

module.exports = routes;
