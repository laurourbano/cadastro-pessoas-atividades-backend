import { Router, Application } from "express";
import { UserController } from "./User.controller";
import { Request, Response } from "express"; // Add this import

const router = Router();

router.get("/users", UserController.getUsers);
router.get("/users/:id", UserController.getUser);
router.post("/users", UserController.createUser);
router.put("/users/:id", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);

export default router;
