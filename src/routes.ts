import { Router, Application } from "express";
import { UserController } from "./User.controller";
import { ActivityController } from "./Activity.controller";
import { LoginController } from "./Login.controller";

const router = Router();

/*rotas usuários*/
router.get("/users", UserController.getUsers);
router.get("/users/:id", UserController.getUser);
/*usado para registrar*/
router.post("/users", UserController.createUser);
router.put("/users/:id", UserController.updateUser);
router.delete("/users/:id", UserController.deleteUser);

/*rotas atividades*/
router.get("/activities", ActivityController.getActivities);
router.get("/activities/:id", ActivityController.getActivity);
router.post("/activities", ActivityController.createActivity);
router.put("/activities/:id", ActivityController.updateActivity);
router.delete("/activities/:id", ActivityController.deleteActivity);

/*rotas de autenticação*/
router.post("/login", LoginController.login);
router.post("/logout", LoginController.logout);

export default router;
