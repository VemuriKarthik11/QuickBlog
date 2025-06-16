import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { adminLogin } from "./controllers/adminController.js";
import blogRouter from "./routes/blogRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
//app.use("/api/admin", adminRouter);

const app = express();

await connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API is Working"));
//app.use("/api/admin", adminLogin);
app.use("/api/admin", adminRouter);

app.use("/api/blog", blogRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

export default app;
