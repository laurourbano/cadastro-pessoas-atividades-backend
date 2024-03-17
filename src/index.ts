import express, { Request, Response } from "express";
import cors from "cors";
import { UserModel } from "./models/UserModel";
import verifiquePassword from "./utils/verifiquePassword";
import routes from "./routes/routes";
import "./database/conection";
import { config } from "dotenv";
config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log(`🔥 Server is running on port ${process.env.PORT}`);
});
