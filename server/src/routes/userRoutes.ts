import { Router } from "express";
import UserController from "../controllers/UserController";

const routes = Router();

routes.get("/", UserController.get_user);
routes.post("/", UserController.create_user)
routes.delete("/",UserController.delete_user)

export default routes;
