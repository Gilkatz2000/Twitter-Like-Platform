import express from "express";
import authRoutes from "./routes/auth.routes.js";

const app = express();
const port = 8000;

app.use("/api/auth", authRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})