const express = require('express')
const app = require('express')()
const port = process.env.PORT || 3000

app.get('/addUser', (req, res) => {
    const query = "CREATE TABLE users (email varchar,firstName varchar,lastName varchar,age int)"
  //  const query = "INSERT INTO users VALUES('rexrig@gmail.com', 'Rex', 'Righetti', 35)"

    client.query(query, (err, res) => {
      if (err) throw err;
      for (let row of res.rows) {
        console.log(JSON.stringify(row));
      }
      client.end();
    });
   });

   const { Client } = require('pg');

   const client = new Client({
     connectionString: process.env.DATABASE_URL,
     ssl: {
       rejectUnauthorized: false
     }
   });

   client.connect();



   app.listen(port, function () {
    console.log(Example app listening on port !);
   });
