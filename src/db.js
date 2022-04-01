const mongoose = require('mongoose')
const { useNewUrlParser, useUnifiedTopology, useCreateIndex, userName, pass, dataBase } = require('./config/configs.json');

const uriProd = `mongodb+srv://${userName}:${pass}@cluster0.lhoc3.mongodb.net/${dataBase}?retryWrites=true&w=majority`;
const uriDev = `mongodb://localhost:27017/${dataBase}`;
const connect = async () => {
  try {
    await mongoose.connect(uriDev, { useNewUrlParser, useUnifiedTopology, useCreateIndex, useFindAndModify: false });
    console.log('Db connected!')
  } catch (error) {
    handleError(error);
  }
  }
 
module.exports = connect();
  
