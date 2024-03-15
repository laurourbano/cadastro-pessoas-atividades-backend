import { Request, Response } from "express";
import sequelize from "./database/conection";
import { QueryTypes } from "sequelize";
import bcrypt from "bcrypt";

export class LoginController {
  static async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const user = await sequelize.query(
        "SELECT * FROM users WHERE email = :email",
        {
          replacements: { email },
          type: QueryTypes.SELECT,
        }
      );
      if (!user) {
        res.status(400).json({ message: "Usuário não encontrado" });
        return;
      }

      interface User {
        password: string;
      }

      const match = await bcrypt.compare(
        password.trim(),
        (user[0] as User).password.trim()
      );
      if (!match) {
        res.status(400).json({ message: "Dados inválidos" });
        return;
      }

      res.status(200).json({ message: "sucesso" });
    } catch (error: any) {
      res.status(401).json("Error: ");
    }
  }

  static async logout(req: Request, res: Response): Promise<void> {
    try {
      res.status(200).end();
    } catch (error: any) {
      res.status(400).json(error);
    }
  }
}
