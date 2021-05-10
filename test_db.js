'use strict';
const Dog = require('./models/dogs.js');

// find all documents
Dog.find({}, (err, result) => {
  console.log(err);
  console.log(result);
  if (err) {
    console.log(err);
  } else {
    return result;
  }
});
