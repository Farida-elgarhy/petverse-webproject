const express= require('express');
const db_access= require('./db.js');
const db= db_access.db;
const server= express();
const port= 8888;
server.use(express.json());

server.listen(port, ()=> {
    console.log(`Server is listening at port ${port}`)
});
