require('dotenv').config();
const {PORT}= process.env;

const { db } = require('./src/db.js');


const cors         = require('cors');
const express      = require('express');
const fileUpload   = require('express-fileupload');

const express = require('express');
const server = express();

server.use(cors());
server.use(express.json());
server.use(fileUpload( {
  createParentPath:true  
}));


server.get('/',(req,res)=> {
    res.send('hola perros')
});






/* db.sync({ force: true })
  .then(()=>{    
    console.log("DataBase sync");
  }); */

server.listen(PORT,()=> {
    console.log(`Listening on port. ${PORT} `);
});