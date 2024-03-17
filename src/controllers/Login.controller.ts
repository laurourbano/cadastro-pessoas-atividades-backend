import { Request, Response } from "express";
import { UserModel } from "../models/UserModel";
import verifiquePassword from "../utils/verifiquePassword";
import { QueryTypes } from "sequelize";
import sequelize from "../database/conection";

export class LoginController {
  static async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const user = await sequelize.query(
        "SELECT * FROM users WHERE email = ?",
        {
          replacements: [email],
          type: QueryTypes.SELECT,
        },
      );

      const match = await verifiquePassword(
        password,
        (user[0] as UserModel).password,
      );
      if (!match) {
        res.status(401).json({ message: "Invalid password" });
        return;
      }
      res.status(200).json({ message: "Login successful" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async logout(req: Request, res: Response): Promise<void> {
    try {
      res.status(200).json({ message: "Logout successful" });
    } catch (error: any) {
      res.status(400).json({ error });
    }
  }
}
