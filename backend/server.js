import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;;

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    connectMongoDB();
})