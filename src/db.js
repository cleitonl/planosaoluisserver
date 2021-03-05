const mongoose = require('mongoose')
const { useNewUrlParser, useUnifiedTopology, useCreateIndex, userName, pass, dataBase } = require('./config/configs.json');

  const uri = `mongodb+srv://${userName}:${pass}@cluster0.lhoc3.mongodb.net/${dataBase}?retryWrites=true&w=majority`;
const connect = async () => {
  try {
    await mongoose.connect(uri, { useNewUrlParser, useUnifiedTopology, useCreateIndex,  useFindAndModify: false });
    console.log('Db connected!')
  } catch (error) {
    handleError(error);
  }
  }
 
module.exports = connect();
  
