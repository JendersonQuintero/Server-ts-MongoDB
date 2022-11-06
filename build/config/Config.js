"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const MONGO_USERNAME = "JendersonQuintero";
const MONGO_PASSWORD = "MSz2u7rM2YcYaJj3";
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.xzq3nx2.mongodb.net/`;
exports.config = {
    mongo: {
        username: MONGO_USERNAME,
        password: MONGO_PASSWORD,
        url: MONGO_URL,
    }
};
