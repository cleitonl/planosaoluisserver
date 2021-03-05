const express = require('express');
const app = express();
const cors = require('cors')
const PORT = process.env.PORT || 5000
require('./src/db.js')

const userRoutes = require('./src/routes/user');
const userTimesRoutes = require('./src/routes/usertime');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.set('json spaces', 4);

app.use('/users',userRoutes);
app.use('/userTimes',userTimesRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});