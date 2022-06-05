// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const baseUrl = process.env.BASE_URL || "http://localhost:8000/api/todos";

const makeUrl = (endpoint: string | string[]) => {
  return `${baseUrl}/${endpoint}`;
};

type Data = {
  id: number;
  todo: string;
  status: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const response = await fetch(makeUrl(req.query.id))
    .then((res) => res.json())
    .then((data) => data);
  res.status(200).json(response);
};

export default handler;
