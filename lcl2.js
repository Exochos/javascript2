const MongoClient = require('mongodb').MongoClient;

// Connection url
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url, {useUnifiedTopology: true});

const dbName = 'aa';

client
    .connect()
    .then(
        client =>
          client
              .db(dbName)
              .listCollections()
.toArray() // Returns a promise that will resolve to the list of the collections
    )
    .then(cols => console.log("Collections", cols))
    .finally(() => client.close());