const { error } = require("console");
const express = require("express");
const fs = require('fs')

const port = process.env.PORT | 8080
const server = express();
let httpServer = null;

function startServer(){
    return new Promise((resolve, reject)=>{
        httpServer = server.listen(port, (err)=>{
            if(err){
                console.error(`Failed to listen on port ${port}, err ${err}`)
                reject("Failed to listen on port")
                return;
            }
            resolve(`Started listening on port ${port}`)
        })
    });
}
function createListeners(){
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
}
async function stopServer(){
    httpServer?.close(async ()=>{
    })
}
if(require.main === module){
    startServer();
    createListeners();
}

module.exports = {startServer, createListeners, stopServer};
