import express, { Request, Response } from "express";
import routes from "./routes";
import "./database/conection";
import { config } from "dotenv";
import cors from "cors";
config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log(`🔥 Server is running on port ${process.env.PORT}`);
});
