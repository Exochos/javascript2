
/*    _ _  _ ___  ____ ____ ___ ____
      | |\/| |__] |  | |__/  |  [__
      | |  | |    |__| |  \  |  ___]    */
'use strict';
const exphbs = require('express-handlebars');
const express = require('express');
const bodyParser = require('body-parser');
// const data = require('./data.js');
const data = require('./models/dogs.js');


/*      ____ _  _ ____ _ _  _ ____
        |___ |\ | | __ | |\ | |___
        |___ | \| |__] | | \| |___
        */
const app = express();
app.engine('handlebars', exphbs({defaultLayout: false}));
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname+ '/public'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

/*      ____ ____ _  _ ___ ____ ____
        |__/ |  | |  |  |  |___ [__
        |  \ |__| |__|  |  |___ ___]                */
//
app.get('/', (req, res) => {
  data.find({}).lean()
      .then((data) => {
        // res.render('home', {result: data});
        res.render('home3', {data: JSON.stringify(data)});
      })
      .catch( (err) => {
        console.log(err);
      });
});

app.get('/about', (req, res) => {
  res.type('text/plain');
  res.send('About page');
});

app.get('/detail', (req, res, next) => {
  data.findOne({name: req.query.name}).lean()
      .then((data) => {
        // console.log(data);
        res.render('details', {data: data} );
      })
      .catch( (err) => next(err));
});
// ////////////////
// API ROUTES   //
// //////////////
app.get('/api/dogs', (req, res) => {
  data.find({}).lean()
      .then((data) => {
        res.json(data);
      }).catch( (err) => next(err));
});

app.get('/api/getdog', (req, res) => {
  const myquery = {name: req.query.name};
  data.findOne(myquery)
      .then((data) => {
        res.json(data);
      }).catch( (err) => res.render('handler', {data: err} ));
});

app.get('/api/delete', (req, res) => {
  const myquery = {name: req.query.name};
  data.deleteOne(myquery, (err, obj) => {
    if (err) {
      res.render('handler', {data: err} );
    } else {
      res.render('handler', {data: 'Deleted Successfully'});
    }
  });
});
app.get('/api/adddogs/', (req, res) => {
  res.render('about', {data: data});
  res.close;
});
app.post('/api/adddogs', (req, res) => {
  const myData = req.body;
  data.create(myData)
      .then(res.send('item saved to database'))
      .catch((err) => {
        res.status(400).send('unable to save to database');
      });
});

app.use( (req, res) => {
  res.type('text/html');
  res.status(404);
  res.sendFile(__dirname + '/public/404.html');
});

/*       _     _     _
        | |   (_)   | |
        | |    _ ___| |_ ___ _ __
        | |   | / __| __/ _ \ '_ \
        | |___| \__ \ ||  __/ | | |
        \_____/_|___/\__\___|_| |_|                  */
app.listen(app.get('port'), () => {
  console.log('Express started! Running on localhost:3000');
});
