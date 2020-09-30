const MobiCarWash = require('./mobileCarWash')
const express = require("express");
var exphbs = require('express-handlebars');
const app = express();
const flash = require('express-flash');
const session = require('express-session');
const bodyParser = require('body-parser')



//const washing = MobiCarWash();
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

app.post('/', function (req, res){
   const name = req.body.name;
   

})

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

const PORT = process.env.PORT || 3009;

app.listen(PORT, function () {
  console.log("App started on port :" + PORT);
});