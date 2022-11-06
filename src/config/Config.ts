const MONGO_USERNAME = "JendersonQuintero";
const MONGO_PASSWORD = "MSz2u7rM2YcYaJj3";
const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.xzq3nx2.mongodb.net/`;

export const config = {
  mongo: {
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    url: MONGO_URL,
  }
};