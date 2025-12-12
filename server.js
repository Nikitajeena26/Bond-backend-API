// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";         // optional: your DB connect module
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// mount routes
app.use("/api/admin", adminRoutes);

// default route
app.get("/", (req, res) => res.send("Bond Backend API running"));

// start
const PORT = process.env.PORT || 5000;
connectDB && connectDB(); // if you have a connectDB function; else ensure DB connects earlier
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
