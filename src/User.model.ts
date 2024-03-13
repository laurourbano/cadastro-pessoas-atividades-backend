import { Model } from "sequelize";
import { Json } from "sequelize/types/utils";

export class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public endereco!: Json;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
