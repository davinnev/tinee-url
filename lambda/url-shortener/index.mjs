import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export const handler = async (event) => {
  const urlCollection = client.db("TinyUrl").collection("url");

  console.log(event.body);
  const body = JSON.parse(event.body);

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
  let isTokenAvailable = true;

  if (!body.customHash) {
    while (isTokenAvailable) {
      if (!body.customHash) generateToken();
      console.log(token);
      isTokenAvailable = await urlCollection.findOne({ hash: token });
    }
  } else {
    token = body.customHash;
    isTokenAvailable = await urlCollection.findOne({ hash: token });
    if (isTokenAvailable) {
      return {
        statusCode: 404,
        headers: {},
        body: JSON.stringify({
          success: false,
          message: "Token not available",
          url: body.url,
          token: token,
        }),
      };
    }
  }

  const createDate = new Date();
  const expiredDate = new Date();

  expiredDate.setDate(expiredDate.getDate() + 30);
  expiredDate.setHours(23);
  expiredDate.setMinutes(59);
  expiredDate.setSeconds(59);
  expiredDate.setMilliseconds(999);

  urlCollection.insertOne({
    hash: token,
    url: body.url,
    creator: body.username,
    createDate: createDate,
    expiredDate: expiredDate,
  });

  console.log(token);

  return {
    statusCode: 200,
    headers: {},
    body: JSON.stringify({
      success: true,
      message: "Successfully insert token.",
      url: body.url,
      token: token,
    }),
  };
};
