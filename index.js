require('dotenv').config();
const {PORT}= process.env;
const { DB_DIALECT, DB_NAME, DB_USER, DB_PASSWORD, DB_HOST,DB_PORT} = process.env;

const {Sequelize }            = require('sequelize');

const sequelize = new Sequelize(`${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, 
  { 
    logging: false,
    native:false
  }
  )

const cors         = require('cors');
const express      = require('express');
const fileUpload   = require('express-fileupload');

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