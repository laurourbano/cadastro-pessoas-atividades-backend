import { Router, Application } from "express";
import { UserController } from "../controllers/User.controller";
import { ActivityController } from "../controllers/Activity.controller";
import { LoginController } from "../controllers/Login.controller";

const router = Router();

/*rotas usuários*/
router.get("/users", UserController.getUsers);
router.get("/users/:id", UserController.getUser);
router.put("/users/:id", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);

/*usado para registrar*/
router.post("/users", UserController.createUser);

/*rotas atividades*/
router.get("/activities", ActivityController.getActivities);
router.get("/activities/:id", ActivityController.getActivity);
router.post("/activities", ActivityController.createActivity);
router.put("/activities/:id", ActivityController.updateActivity);
router.delete("/activities/:id", ActivityController.deleteActivity);
router.get("/activities/:id/users", ActivityController.listActivitiesByUser);

router.post("/login", LoginController.login);
router.post("/logout", LoginController.logout);

export default router;
