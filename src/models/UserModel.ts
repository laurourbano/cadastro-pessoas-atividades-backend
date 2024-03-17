import { DataTypes, Model, Sequelize } from "sequelize";

interface UserInterface {
  id: number;
  name: string;
  telefone: string;
  email: string;
  endereco: string;
  password: string;
}

export class UserModel extends Model<UserInterface> {

  password: string='';
  public static initModel(sequelize: Sequelize): void {
    UserModel.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        telefone: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        endereco: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "UserModel",
      },
    );
  }
}
