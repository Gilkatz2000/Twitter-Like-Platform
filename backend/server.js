import express from "express";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";

import dotenv from "dotenv";
import path from "path";

// Load .env from backend folder when running from root
dotenv.config({ path: path.resolve("backend/.env") });


const app = express();
const port = process.env.PORT || 8000;;

app.get("/", (req,res) => {
    res.send("Hello");
})

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ✅ first parse the body

app.use(cookieParser());
app.use("/api/auth", authRoutes); // ✅ then load the routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    connectMongoDB();
});