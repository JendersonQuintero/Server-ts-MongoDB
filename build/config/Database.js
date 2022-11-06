"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Config_1 = require("./Config");
const Server_1 = require("./Server");
const server = new Server_1.Server();
const connectDB = function () {
    mongoose_1.default
        .connect(Config_1.config.mongo.url, {
        retryWrites: true,
        w: "majority",
    })
        .then(() => {
        console.log("Conectado a la base de datos");
        server.start();
    })
        .catch((error) => {
        console.log(error);
    });
};
exports.connectDB = connectDB;
