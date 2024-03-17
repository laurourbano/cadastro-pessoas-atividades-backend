import { DataTypes, Model, Sequelize } from "sequelize";

interface ActivityInterface {
  id: number;
  name: string;
  description: string;
  start_date: Date;
  end_date: Date;
}

export class ActivityModel extends Model<ActivityInterface> {
  public static initModel(sequelize: Sequelize): void {
    ActivityModel.init(
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
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        start_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        end_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "ActivityModel",
      },
    );
  }
}
