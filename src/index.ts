import { Server } from "./config/Server";
import { connectDB } from "./config/Database";

const server = new Server();

connectDB();
server.start();