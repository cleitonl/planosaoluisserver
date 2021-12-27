const express = require('express');
const cors = require('cors')
const PORT = process.env.PORT || 80

const app = express();

const server = require("http").createServer(app);
const io = require("socket.io")(server);

require('./src/db.js')

const timeRequestRoutes = require('./src/routes/timeRequest');
const userTimesRoutes = require('./src/routes/usertime');
const userRoutes = require('./src/routes/user');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.set('json spaces', 4);
app.use(express.json());

app.use((req, res, next) => {
  req.io = io;
  next()
});

app.use('/timeRequest', timeRequestRoutes);
app.use('/userTimes', userTimesRoutes);
app.use('/users', userRoutes);

server.listen(PORT, () => {
  console.log(`Example app listening at Port: ${PORT}`)
});