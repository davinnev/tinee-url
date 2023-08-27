import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("Query is: ", req.body);
  const { username } = req.body;
  const urlCollection = client.db("TinyUrl").collection("url");

  try {
    const userUrls = await urlCollection.find({ creator: username }).toArray();
    console.log("User URLs is: ", userUrls);
    return res.status(201).json({
      message: `User ${username} has the following urls`,
      data: userUrls,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
