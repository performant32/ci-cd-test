const {startServer, createListeners, stopServer} = require("./index.js")
//import {expect, jest, test} from '@jest/globals';

test("Starting server", async ()=>{
    await startServer();
    stopServer();
});

