import express from "express";
import UserController from "../controllers/plateController.js";

const platesRouter = express.Router();

platesRouter.get("/", UserController.getAllPlates);
platesRouter.post("/", UserController.createPlate);
platesRouter.get("/:id", UserController.getPlatesById);
platesRouter.delete("/:id", UserController.deletePlates);
platesRouter.put("/:id", UserController.updatePlates);
platesRouter.get("/available", UserController.getAvailablePlates);



export default platesRouter;