import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const userCollection = client.db("TinyUrl").collection("users");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(req.body);

  console.log(req);
  if (req.body.type == "SignIn") {
    console.log("Lol");
    const isFound = await userCollection.findOne({
      username: username,
      password: password,
    });
    console.log(isFound);
    if (!isFound) {
      return res.status(404).json({ error: "Wrong username/password" });
    }
    const data = {
      status: 200,
      username: isFound.username,
      password: isFound.password,
    };
    return res.status(200).json(data);
  } else if (req.body.type == "SignUp") {
    const isUsernameTaken = await userCollection.findOne({
      username: username,
    });
    if (isUsernameTaken) {
      return res
        .status(404)
        .json({ error: "Username taken, please use another one!" });
    }
    userCollection.insertOne({ username: username, password: password });
    return res.status(200).json({ message: "Success!" });
  } else {
    console.log("Method not allowed");
    return res
      .status(404)
      .json({ error: "Method not allowed", body: req.body });
  }
};
