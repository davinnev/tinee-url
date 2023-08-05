import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    // Subscribe
    const { url } = req.body;
    let lambdaRes = null;

    try {
      const response = await (
        await fetch(process.env.LAMBDA_SHORTEN_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: url }),
        })
      ).json();

      console.log(response);

      if (response.success) {
        return res.status(200).json({
          message: "success",
          data: response,
        });
      }

      return res.status(200).json({
        success: false,
        message: "Invalid token.",
      });
    } catch (error) {
      return res.status(200).json({
        success: false,
        message: "Invalid token.",
      });
    }
  } else {
    // Not allowed methods
    res.status(405).json({
      message: "Method not allowed.",
    });
  }
};
