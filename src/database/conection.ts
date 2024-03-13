import { Sequelize, Dialect } from "sequelize";
import config from "./config";

const sequelize = new Sequelize(
  config.development.database!,
  config.development.username!,
  config.development.password!,
  {
    host: config.development.host!,
    dialect: "mysql",
  }
);

try {
  sequelize.authenticate();
  console.log("📦 Connection has been established successfully.");
} catch (error) {
  console.error("😑 Unable to connect to the database:", error);
}

export default sequelize;
