// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const BASE_URL = process.env.BASE_URL || "http://localhost:8000/api/todos";

type Data = {
  id: number;
  todo: string;
  status: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const response = await fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => data);
  res.status(200).json(response);
};

export default handler;
