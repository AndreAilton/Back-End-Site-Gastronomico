import express from "express";
import {registerUser, loginUser} from "../controllers/authController.js";
import authenticate from "../middlewares/authenticate.js";

const AuthRouter = express.Router();

AuthRouter.post("/register", registerUser);
AuthRouter.post("/login", loginUser);
AuthRouter.get("/private", authenticate, (req, res) => res.status(200).json({msg: "Rota privada", user: req.email}));

export default AuthRouter;