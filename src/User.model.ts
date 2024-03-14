import { Model } from "sequelize";

export class User extends Model {
  id?: number;
  name?: string;
  telefone?: string;
  email?: string;
  endereco?: string;
  password?: string;
  idActivities?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
