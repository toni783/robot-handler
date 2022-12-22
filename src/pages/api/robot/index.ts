import { NextApiRequest, NextApiResponse } from "next";
import { conn } from "../../../utils/database";

export const SELECT_STATEMENT = `
id,
name,
number_of_arms as "numberOfArms"
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const query = `
        SELECT ${SELECT_STATEMENT}
        FROM robot
        ORDER BY id ASC`;
        const response = await conn.query(query);
        return res.json(response.rows);
      } catch (error: any) {
        return res.status(400).json({ message: error.alertMessage });
      }
    case "POST":
      try {
        const { name, numberOfArms } = body;

        const query = `
            INSERT INTO robot
                (name, number_of_arms)
            VALUES
                ($1, $2) 
            RETURNING ${SELECT_STATEMENT};
          `;
        const values = [name, numberOfArms];

        const response = await conn.query(query, values);

        return res.json(response.rows[0]);
      } catch (error: any) {
        return res.status(400).json({ message: error.alertMessage });
      }
    default:
      return res.status(400).json({ message: "Method not supported" });
  }
}
