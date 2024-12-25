import express from "express";
import Router from "./src/routes.js";
import dotenv from "dotenv";
import connectDB from "./src/config/Connect.js";
import cors from 'cors';

dotenv.config();
connectDB();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(Router);

app.listen(PORT, () => {
    console.log("http://localhost:3000");
})