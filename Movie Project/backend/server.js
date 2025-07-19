const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const movieRoutes = require("./routes/movieRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ DB Connection Error:", err));

app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
