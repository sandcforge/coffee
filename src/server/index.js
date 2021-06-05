const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const miscRoutes = require('./api.js');
const {envConfig} = require('./constants.js');

const app = express();
app.use(express.static('dist'));
app.use(express.json());

const httpServer = http.createServer(app);
const io = new Server(httpServer);


miscRoutes(app);
httpServer.listen(process.env.PORT || 8080, () => {
  console.log(`Listening on port ${process.env.PORT || 8080}!`);
  console.log(`NodeEnv: ${envConfig.nodeEnv}`);
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


