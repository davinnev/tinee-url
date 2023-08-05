import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const urlCollection = client.db("TinyUrl").collection("url");
  const { token } = req.query;
  try {
    const urlData = await urlCollection.findOne({ hash: token });

    if (urlData && urlData.url) {
      return res.status(200).json({
        message: "success",
        url: urlData.url,
      });
    } else {
      return res.status(404).json({ error: "URL not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
