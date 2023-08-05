import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export const handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
  return response;
};
