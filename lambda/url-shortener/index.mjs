import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export const handler = async (event) => {
  console.log(event.body);
  const body = JSON.parse(event.body);
  const urlCollection = client.db("TinyUrl").collection("url");

  function generateToken() {
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    token = "";
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      const randomCharacter = characters.charAt(randomIndex);
      token += randomCharacter;
    }
  }
  console.log(urlCollection);
  let token = "";

  if (!body.customHash) {
    let isTokenAvailable = true;

    while (isTokenAvailable) {
      generateToken();
      console.log(token);
      isTokenAvailable = await urlCollection.findOne({ hash: token });
    }
  } else {
    token = body.customHash;
  }

  urlCollection.insertOne({ hash: token, url: body.url });

  console.log(token);

  return {
    statusCode: 200,
    headers: {},
    body: JSON.stringify({
      success: true,
      message: "Successfully insert token.",
    }),
  };
};
