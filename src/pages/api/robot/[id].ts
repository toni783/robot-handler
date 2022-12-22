import { NextApiRequest, NextApiResponse } from "next";
import { SELECT_STATEMENT } from ".";
import { conn } from "../../../utils/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    body,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const query = `
        SELECT ${SELECT_STATEMENT}
        FROM robot
        WHERE id = $1
        ORDER BY id ASC`;

        const values = [id];
        const result = await conn.query(query, values);
        return res.json(result.rows[0]);
      } catch (error: any) {
        return res.status(400).json({ message: error.alertMessage });
      }

    default:
      return res.status(400).json({ message: "Method are not supported" });
  }
}
