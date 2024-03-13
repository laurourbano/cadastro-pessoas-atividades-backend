import { Model } from "sequelize";
import { Json } from "sequelize/types/utils";

export class User extends Model {
  public id?: number;
  public name!: string;
  public telefone!: string;
  public email!: string;
  public endereco!: Json;
  public password!: string;
  public idActivities?: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
