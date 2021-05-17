// Imports Live Here              //
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const connectionString = require('../credentials.js');

// Connection string for database //
mongoose.connect(connectionString, {
  dbName: 'doggos01',
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
}).catch((err) => console.log(err.reason));


// Log that we connected          //
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
{collection: 'JavaScript2'});

module.exports = mongoose.model('Dog', dogSchema);
