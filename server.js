require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./config/db");
const adminRoutes = require("./routes/adminRoutes");
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api/admin", adminRoutes);

connectDB();

app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});