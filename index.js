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

client.connect();

app.get('/addUser', (req, res) => {
    const query = "CREATE TABLE users (email varchar,firstName varchar,lastName varchar,age int)"
    const query2 = "INSERT INTO users VALUES('rexrig@gmail.com', 'Rex', 'Righetti', 35)"

    client.query(query, (err, res) => {
      if (err) throw err;
      for (let row of res.rows) {
        console.log(JSON.stringify(row));
      }
      client.end();
    });
   client.query(query2, (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
  });
 });


client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

// Access public folder from root
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

http.listen(process.env.PORT || 5000, function(){
  console.log('listening on *:5000');
});
