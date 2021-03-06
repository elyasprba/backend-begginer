require('dotenv').config();
// import express
const express = require('express');

const mainRouter = require('./src/routes/index');
const db = require('./src/config/db');

const server = express();
const PORT = 8080;

db.connect()
   .then(() => {
      console.log('DataBase Connected');
      server.use(mainRouter);

      // server.get('/', (_, res) => {
      //    const data = {
      //       success: true,
      //       massage: 'Backand is running well',
      //    };
      //    return res.send(data);
      // });

      server.listen(PORT, () => {
         console.log('App listening on port 8080');
      });
   })
   .catch((err) => {
      console.log(err);
   });
