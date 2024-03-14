import { Request, Response } from "express";
import sequelize from "./database/conection";
import { QueryTypes } from "sequelize";

export class LoginController {
  static async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const user = await sequelize.query(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        {
          replacements: [email, password],
          type: QueryTypes.SELECT,
        }
      );
      if (user.length > 0) {
        res.status(200).json(user);
      } else {
        res.status(401).end();
      }
    } catch (error: any) {
      res.status(400).json(error);
    }
  }

  static async logout(req: Request, res: Response): Promise<void> {
    try {
      res.status(200).end();
    } catch (error: any) {
      res.status(400).json(error);
    }
  }

  static async register(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      await sequelize.query(
        "INSERT INTO users (email, password) VALUES (?, ?)",
        {
          replacements: [email, password],
          type: QueryTypes.INSERT,
        }
      );
      res.status(201).end();
    } catch (error: any) {
      res.status(400).json(error);
    }
  }
}
