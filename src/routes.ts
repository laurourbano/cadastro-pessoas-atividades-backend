import { Router, Application } from "express";
import { UserController } from "./User.controller";
import { Request, Response } from "express"; // Add this import
import { ActivityController } from "./Activity.controller";

const router = Router();

/*rotas usuários*/
router.get("/users", UserController.getUsers);
router.get("/users/:id", UserController.getUser);
router.post("/users", UserController.createUser);
router.put("/users/:id", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);

/*rotas atividades*/
router.get("/activities", ActivityController.getActivities);
router.get("/activities/:id", ActivityController.getActivity);
router.post("/activities", ActivityController.createActivity);
router.put("/activities/:id", ActivityController.updateActivity);
router.delete("/activities/:id", ActivityController.deleteActivity);

export default router;
