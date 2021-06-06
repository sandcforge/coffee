const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const miscRoutes = require('./api.js');
const { envConfig } = require('./constants.js');

const app = express();
app.use(express.static('dist'));
app.use(express.json());

const httpServer = http.createServer(app);
const socketIoServer = new Server(httpServer);
app.set('socketIoServer', socketIoServer);
const rocketInit = {
  status:[-1,-1,-1,-1,-1],
  message:['','','','',''],
}
app.set('rocket',rocketInit);
app.set('totalStatusNumber', 5);
miscRoutes(app);
httpServer.listen(process.env.PORT || 8080, () => {
  console.log(`Listening on port ${process.env.PORT || 8080}!`);
  console.log(`NodeEnv: ${envConfig.nodeEnv}`);
});

socketIoServer.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on("C2H", (payload) => {
    socket.emit('H2C', JSON.stringify({ rocketIndex: 0, statusId: 1 }));
  });
});

module.exports = { socketIoServer };
