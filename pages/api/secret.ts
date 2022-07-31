import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import type { NextApiRequest, NextApiResponse } from "next";

const SecretRoute = (req: NextApiRequest, res: NextApiResponse) => {
  const session = getSession(req, res);
  const user = session?.user;

  if (!user)
    res
      .status(500)
      .json({ error: "Error, user no authenticated", success: false });

  res.status(200).json({ user });
};

export default withApiAuthRequired(SecretRoute);
