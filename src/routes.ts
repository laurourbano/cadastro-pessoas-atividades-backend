import { Router } from "express";
import { UserController } from "./User.controller";

const router = Router();

router.get("/users", UserController.getUsers);

export default router;
