const { error } = require("console");
const express = require("express");
const fs = require('fs')

const port = process.env.PORT | 8080
const server = express();

server.listen(port, (err, reason)=>{
    if(err)
        console.error(`Failed to listen on port ${port}, err ${reason}`)
    console.log("Started server on port " + port)
})
server.get("/", (req, res)=>{
    try{
        res.writeHead(200, {"Content-Type":"text/html"})
        res.write(`Hello client ${req.url}`)
        res.end();
    }
    catch(exception){
        console.log("Error handling client")
    }
})
