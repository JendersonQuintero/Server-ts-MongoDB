"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./config/Server");
const Database_1 = require("./config/Database");
const server = new Server_1.Server();
(0, Database_1.connectDB)();
server.start();
