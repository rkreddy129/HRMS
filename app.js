
let mongoose = require('mongoose');
var express = require('express');
let app = express();
const server = '127.0.0.1:27017'
const database = 'hrms';
/* Making mongoose to make use of new ES6 promise feature */
mongoose.Promise = global.Promise;
// Options used for connecting mongo database with mongoose
const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};
mongoose.connect(`mongodb://${server}/${database}`)
  .then(() => {
    loadApplication();
    console.log('Database connection successful')
  })
  .catch(err => {
    console.error('Datebase connection error' + err)
  })

const loadApplication = () => {
  try {
    require('./loaders/expressLoaders')(app);

  } catch (error) {
    console.log(error);
    console.log('Failure in loading express app');
    console.log('Error message : ' + error.message);
  }
};
module.exports = {app};
