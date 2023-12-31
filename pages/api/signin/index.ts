import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body);

  if (req.body.type == "SignUp") {
    try {
      const response = await fetch(`${process.env.LAMBDA_VERIFY_SIGNIN}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: req.body.username,
          password: req.body.password,
          type: "SignUp",
        }),
      });
      console.log(response);
      if (response.status === 200) {
        return res.status(200).json({ message: "Sign up successful" });
      } else {
        console.log("Signup not successful");
        return res.status(404).json({ error: "Method not allowed" });
      }
    } catch (error) {
      // Handle any network or server errors
    }
  }
};
