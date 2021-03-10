//change
var app = require('express')();
var express = require('express');
var path = require('path');
var http = require('http').Server(app);
var bCrypt = require('bcryptjs');
var bodyParser = require('body-parser');
var router = require('./router.js');
var Authrouter = require('./Authrouter.js');

const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect(err => {
  if (err) {
    console.error('connection errorasdfasdf', err.stack)
  } else {
    console.log('connectedasdf')
  }
})

let x = {};

const query = `
SELECT *
FROM referer
`;



//throwing error so commenting out
 // let test={'name': 'bob'}
 // app.get('/contacts', function (req, res) {
 //     res.render('Tables/contacts',{test});
 // })


app.use('/public', express.static('public'));
app.get('/layouts/', function(req, res) {
  res.render('view');
});


// Add Authentication Route file with app
app.use('/', Authrouter);

//For set layouts of html view
var expressLayouts = require('express-ejs-layouts');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Add Route file with app
app.use('/', router);

app.get('/contacts', function (req, res) {
  client.query(query, (err, data) => {
      if (err) {
          console.error(err);
          return;
      }
      console.log(data);
res.render('Tables/contacts',{data.rows});

      client.end();
  });

})

app.listen(process.env.PORT || 5000, function(){
  console.log('listening on *:5000');
});
