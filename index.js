const MobiCarWash = require('./mobileCarWash')
const express = require("express");
var exphbs = require('express-handlebars');
const app = express();
const flash = require('express-flash');
  const session = require('express-session');

const washing = MobiCarWash();
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


app.use(express.static('public'));

app.use(flash());

app.use(session({
    secret : "enter a name",
    resave: false,
    saveUninitialized: true
  }));

app.get('/addFlash', function (req, res) {
    req.flash('info', 'Flash Message Added');
    res.redirect('/');
  });
  

app.get('/', function (req, res) {
    res.render('index')
})

app.post('/washing', function (req, res) {
    var names = req.body.name
    var carType = req.body.vehicle
    var serviceType =req.body.serveType

    if (names === "") {
      req.flash('error', 'Please enter name')
    }
    else if (carType === undefined) {
      req.flash('error', 'Please select vehicle type')
    } 
    else if (serviceType === undefined) {
        req.flash('error', 'Please select service type')
    }else {
      washing.greetingLanguages(carType, serviceType, names)
    }
  
    let vehWash = {
      name: washing.washingServices(carType, serviceType, names),
    //   count: washing.washCounter()
    }
    // console.log(washing.washCounter());
    res.render('index', {
        vehWash
    });
  })


  app.get('/actions/:name', function (req, res) {
    var name = req.params.name
    let recordedNames = washing.getName(name)
    res.render('actions', { actions: recordedNames })
  })

const PORT = process.env.PORT || 3009;

app.listen(PORT, function () {
    console.log("App started on port :" + PORT);
});