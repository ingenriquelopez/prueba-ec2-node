const PORT = 3001;
const express = require('express');
const server = express();

server.get('/',(req,res)=> {
    res.send('hola perros')
});


server.listen( PORT, ()=> {
    console.log(`listening on port: ${PORT}`)
    return(`listening on port: ${PORT}`)
})