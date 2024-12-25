import express from "express";
import AuthRouter from "./routes/auth.js";
import UserRouter from "./routes/user.js";
import PlatesRouter from "./routes/plates.js";
import OrderRouter from "./routes/orders.js";
const Router = express.Router();


Router.use("/auth", AuthRouter);
Router.use("/users", UserRouter);
Router.use("/plates", PlatesRouter);
Router.use("/orders", OrderRouter)

export default Router;
