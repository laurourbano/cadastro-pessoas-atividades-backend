import express, { Request, Response } from "express";
import routes from "./routes";
import "./database/conection";
import sequelize from "./database/conection";
import { config } from "dotenv";
config();

const app = express();

app.use(express.json());

app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log(`🔥 Server is running on port ${process.env.PORT}`);
});
