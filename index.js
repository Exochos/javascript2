
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
app.get('/', (req, res) => {
  data.find({}).lean()
      .then((data) => {
        res.render('home', {result: data});
      })
      .catch( (err) => next(err));
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
