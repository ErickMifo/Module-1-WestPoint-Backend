const express = require('express');
const cors = require('cors');
const socketio = require('socket.io');
const http = require('http');

const mongoose = require('mongoose');
const requireDir = require('require-dir');
const fetch = require('node-fetch');
require('dotenv').config();

const apiKey = process.env.API_KEY;
const frontEndURL = 'http://localhost:3000/';

const PORT = process.env.PORT || 3001;
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors());
const options = {
  cors: true,
  origins: [frontEndURL],
};

const io = socketio(server, options);

io.on('connection', (socket) => {
  setInterval(async () => {
    const response = await fetch(`https://free.currconv.com/api/v7/convert?q=GBP_USD&compact=ultra&apiKey=${apiKey}`);
    const json = await response.json();
    socket.emit('test', json);
  }, 1000000);

  socket.on('disconnect', () => {
    console.log('User has disconnected.');
  });
});

mongoose.connect(
  'mongodb://localhost:27017/trades',
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
);

requireDir('./models');

app.use('/', require('./routes'));

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
