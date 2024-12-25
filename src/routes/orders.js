import OrderController from "../controllers/orderController.js";
import express from "express";


const ordersRouter = express.Router();

ordersRouter.get("/", OrderController.getAllOrder);
ordersRouter.get("/available", OrderController.getAvailableOrder);
ordersRouter.get("/:id", OrderController.getOrderById);
ordersRouter.get("/client/:id", OrderController.getOrderByClient);
ordersRouter.post("/", OrderController.createPlate);
ordersRouter.delete("/:id", OrderController.deleteOrder);
ordersRouter.put("/:id", OrderController.updateOrder);

export default ordersRouter;