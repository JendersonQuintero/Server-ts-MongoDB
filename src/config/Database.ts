import mongoose from "mongoose";
import { config } from "./Config";

const connectDB = function () {
  mongoose
    .connect(config.mongo.url, {
      retryWrites: true,
      w: "majority",
    })
    .then(() => {
      console.log("Conectado a la base de datos");
    })
    .catch((error) => {
      console.log(error);
    });
};

export { connectDB };