import { Request, Response } from "express";
import sequelize from "../database/conection";
import { QueryTypes } from "sequelize";
import * as bcrypt from "bcrypt";
const jwt = require("jsonwebtoken"); // Biblioteca para JWT

export class UserController {
  static async generateToken(
    payload: { id: any; name: any },
    secret: any,
    options: any
  ) {
    return await jwt.sign(payload, secret, options);
  }
  static async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await sequelize.query("SELECT * FROM users", {
        type: QueryTypes.SELECT,
      });
      res.status(200).json({ users });
    } catch (error: any) {
      res.status(400).json({ error });
    }
  }

  static async getUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const user = await sequelize.query("SELECT * FROM users WHERE id = ?", {
        replacements: [id],
        type: QueryTypes.SELECT,
      });
      res.status(200).json(user);
    } catch (error: any) {
      res.status(400).json(error);
    }
  }

  static async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;
      await sequelize.query(
        "UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?",
        {
          replacements: [name, email, password, id],
          type: QueryTypes.UPDATE,
        }
      );
      res.status(204).end();
    } catch (error: any) {
      res.status(400).json(error);
    }
  }

  static async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await sequelize.query("DELETE FROM users WHERE id = ?", {
        replacements: [id],
        type: QueryTypes.DELETE,
      });
      res.status(204).end();
    } catch (error: any) {
      res.status(400).json(error);
    }
  }

  static async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { name, telefone, email, endereco, password } = req.body;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = {
        name: req.body.name,
        telefone: req.body.telefone,
        email: req.body.email,
        endereco: req.body.endereco,
        password: hashedPassword,
      };
      await sequelize.query(
        "INSERT INTO users (name, telefone, email, endereco, password) VALUES (:name, :telefone, :email, :endereco, :password)",
        {
          replacements: user,
          type: QueryTypes.INSERT,
        }
      );
      res.status(201).end();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
