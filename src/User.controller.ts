import { User } from "./User.model";
import { Request, Response } from "express";
import sequelize from "./database/conection";
import { QueryTypes } from "sequelize";

export class UserController {
  static async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await sequelize.query("SELECT * FROM users", {
        type: QueryTypes.SELECT,
      });
      res.status(200).json({ users });
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  public async getUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  public async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password } = req.body;
      const user = await User.create({
        name,
        email,
        password,
      });
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  public async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;
      await User.update(
        {
          name,
          email,
          password,
        },
        {
          where: {
            id,
          },
        }
      );
      res.status(204).end();
    } catch (error) {
      res.status(400).json(error);
    }
  }

  public async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await User.destroy({
        where: {
          id,
        },
      });
      res.status(204).end();
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
