import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const userCollection = client.db("TinyUrl").collection("users");

export const handler = async (event) => {
  console.log(event.body);

  const body = JSON.parse(event.body);
  const username = body.username;
  const password = body.password;

  console.log(event);
  if (body.type == "SignIn") {
    console.log("Lol");
    const isFound = await userCollection.findOne({
      username: username,
      password: password,
    });
    console.log(isFound);
    if (!isFound) {
      const response = {
        statusCode: 404,
        body: JSON.stringify({
          message: "User not found",
          name: null,
        }),
      };
      return response;
    }

    const createDate = isFound.createDate.toString();
    const data = {
      _id: createDate,
      email: createDate,
      name: isFound.username,
    };
    const response = {
      statusCode: 200,
      body: JSON.stringify(data),
    };
    return response;
  } else if (body.type == "SignUp") {
    const isUsernameTaken = await userCollection.findOne({
      username: username,
    });
    if (isUsernameTaken) {
      const response = {
        statusCode: 404,
        body: JSON.stringify("Username taken"),
      };
      return response;
    }
    const createDate = new Date();
    userCollection.insertOne({
      username: username,
      password: password,
      createDate: createDate,
    });
    const response = {
      statusCode: 200,
      body: JSON.stringify("Successfully signup"),
    };
    return response;
  } else {
    console.log("Method not allowed");
    return res.status(404).json({ error: "Method not allowed", body: body });
  }
};
