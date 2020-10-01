
const washing = require('./mobileCarWash')


const express = require("express");
var exphbs = require('express-handlebars');
const app = express();
const flash = require('express-flash');
const session = require('express-session');
const bodyParser = require('body-parser')



const pg = require("pg");
const Pool = pg.Pool;

// should we use a SSL connection
let useSSL = false;
let local = process.env.LOCAL || false;
if (process.env.DATABASE_URL && !local) {
    useSSL = true;
}
// which db connection to use
const connectionString = process.env.DATABASE_URL || 'postgresql://codex-coder:pg123@localhost:5432/mobileCarWash';

const pool = new Pool({
    connectionString,
    ssl: useSSL
});


const MobiCarWash = washing(pool);


app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use(flash());

app.use(session({
  secret: "enter a name",
  resave: false,
  saveUninitialized: true
}));

app.get('/addFlash', function (req, res) {
  req.flash('info', 'Flash Message Added');
  res.redirect('/');
});



//setup middleware

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', { error: err });
}

app.post('/', async function (req, res){
    const name = req.body.name;
    const location = req.body.location;
    const table = req.body.table;
    const VehicleType = req.body.VehicleType;
    const serveType = req.body.serveType;

    await MobiCarWash.setList(req.body.settings),
    await MobiCarWash.carService(req.body.SelectedServ)
 });

app.get('/', function (req, res) {

  res.render('index')
});


app.get('/cardetailer', function (req, res) {
  res.render('cardetailer')
});

app.get('/service', function (req, res){

  res.render('service')
});

app.get('/payment', function (req, res){
  res.render('payment')
});

app.get('/card', function (req, res){
  res.render('card')
});

app.get('/cash', function (req, res){
  res.render('cash')
});


app.get('/ratings', function (req, res){
    res.render('ratings')
  });


const PORT = process.env.PORT || 3009;

app.listen(PORT, function () {
  console.log("App started on port :" + PORT);
});