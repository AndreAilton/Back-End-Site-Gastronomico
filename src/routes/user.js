import express from "express";
import UserController from "../controllers/userController.js";
import authenticate from "../middlewares/authenticate.js";

const UserRouter = express.Router();

UserRouter.get("/", authenticate, UserController.getAllUsers);
UserRouter.get("/:id", authenticate, UserController.getUserById);
UserRouter.delete("/:id", authenticate, UserController.deleteUser);
UserRouter.put("/:id", authenticate, UserController.updateUser);

export default UserRouter;