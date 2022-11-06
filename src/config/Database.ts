import mongoose from "mongoose";
import { config } from "./Config";
import { Server } from "./Server";

const server = new Server();

const connectDB = function () {
  mongoose
    .connect(config.mongo.url, {
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

export { connectDB };