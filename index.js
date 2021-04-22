
/*          _ _  _ ___  ____ ____ ___ ____ 
            | |\/| |__] |  | |__/  |  [__  
            | |  | |    |__| |  \  |  ___]          */                             
'use strict'
let exphbs = require("express-handlebars")
const express = require("express")
const bodyParser = require("body-parser")
const data = require('./data.js')
///////////////////////////////////////////////////////


/*      ____ _  _ ____ _ _  _ ____ 
        |___ |\ | | __ | |\ | |___ 
        |___ | \| |__] | | \| |___                  */
const app = express();
app.engine('handlebars', exphbs({defaultLayout: false}));
app.set("view engine", "handlebars");
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname+ '/public'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
///////////////////////////////////////////////////////


                
/*      ____ ____ _  _ ___ ____ ____ 
        |__/ |  | |  |  |  |___ [__  
        |  \ |__| |__|  |  |___ ___]                */

    app.get('/', (req, res) => {
        let result = data.getAll();
        res.render('home', { result : result } );
    });

    app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('About page');
    });

    app.get('/detail', (req, res) => {
        if(data.getItem(req.query.name)) {
            let result = data.getItem(req.query.name);
            res.render('details', {data : result});
        }
        else {
            res.send("404 Not Found");
        }
        
    });
// 404 route   //
app.use( (req,res) => {
    res.type('text/html');
    res.status(404);
    res.sendFile(__dirname + '/public/404.html'); 
});
///////////////////////////////////////////////////////


/*       _     _     _             
        | |   (_)   | |            
        | |    _ ___| |_ ___ _ __  
        | |   | / __| __/ _ \ '_ \ 
        | |___| \__ \ ||  __/ | | |
        \_____/_|___/\__\___|_| |_|                  */
app.listen(app.get('port'), () => {
console.log('Express started! Running on localhost:3000'); 
});
///////////////////////////////////////////////////////