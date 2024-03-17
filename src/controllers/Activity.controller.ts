import { Request, Response } from "express";
import sequelize from "../database/conection";
import { QueryTypes } from "sequelize";
import { ActivityModel } from "../models/ActivityModel";

export class ActivityController {
  
  static async getActivities(req: Request, res: Response): Promise<void> {
    try {
      const activities = await sequelize.query("SELECT * FROM activities", {
        type: QueryTypes.SELECT,
      });
      res.status(200).json({ activities });
    } catch (error: any) {
      res.status(400).json({ error });
    }
  }

  static async getActivity(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const activities = await sequelize.query(
        "SELECT * FROM activities WHERE id = ?",
        {
          replacements: [id],
          type: QueryTypes.SELECT,
        },
      );
      res.status(200).json(activities);
    } catch (error: any) {
      res.status(400).json(error);
    }
  }

  static async updateActivity(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { name, description, start_date, end_date } = req.body;
      await sequelize.query(
        "UPDATE activities SET name = ?, description = ?, start_date = ?, end_date = ? WHERE id = ?",
        {
          replacements: [name, description, start_date, end_date, id],
          type: QueryTypes.UPDATE,
        },
      );
      res.status(202).end();
    } catch (error: any) {
      res.status(400).json(error);
    }
  }

  static async deleteActivity(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await sequelize.query("DELETE FROM activities WHERE id = ?", {
        replacements: [id],
        type: QueryTypes.DELETE,
      });
      res.status(204).end();
    } catch (error: any) {
      res.status(400).json(error);
    }
  }

  static async createActivity(req: Request, res: Response): Promise<void> {
    try {
      const { name, description, start_date, end_date } = req.body;
      const activity = {
        name,
        description,
        start_date,
        end_date,
      };
      await sequelize.query(
        "INSERT INTO activities (name, description, start_date, end_date) VALUES (:name, :description, :start_date, :end_date)",
        {
          replacements: activity,
          type: QueryTypes.INSERT,
        },
      );
      res.status(201).json({ message: "Activity created successfully!" });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async listActivitiesByUser(
    req: Request,
    res: Response,
  ): Promise<void> {
    try {
      const { id } = req.params;     
      const activities = await sequelize.query(
        `SELECT name, description, start_date, end_date
        FROM activities ac
        JOIN pessoaatividade pa ON(ac.id = pa.idActivity)
        WHERE pa.idUser = ${id}`,
        {
          replacements: [id],
          type: QueryTypes.SELECT,
        },
      );
      const userId = (activities[0] as any).id;
      console.log(userId);
      res.status(200).json({ atividades: activities, id: userId });
    } catch(e:any){
      res.status(400).json({ message: e.message });
    }
  }
}
