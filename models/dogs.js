
const mongoose = require('mongoose');
// const {Schema} = mongoose;
const Schema = mongoose.Schema;
// const connectionString = connectS;
const connectionString = require('../credentials.js');

mongoose.connect(connectionString, {
  dbName: 'doggos01',
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
}).catch((err) => console.log(err.reason));

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
  collection: 'JavaScript2'},
);

module.exports = mongoose.model('Dog', dogSchema);
