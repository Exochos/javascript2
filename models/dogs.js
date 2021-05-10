
const mongoose = require('mongoose');
// const {Schema} = mongoose;
const Schema = mongoose.Schema;
// const connectS = require('../credentials.js');
// const connectionString = connectS;
const connectionString = 'mongodb://localhost:27017/';

mongoose.connect(connectionString, {
  dbName: 'aa',
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});


const dogSchema = new Schema({
  name: String,
  age: String,
  breed: String,
  height: String,
  weight: String,
  img: String,
},
{
  collection: 'a'},
);

module.exports = mongoose.model('Dog', dogSchema);
