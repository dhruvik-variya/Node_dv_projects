const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const server = express();

server.use(cookieParser());
server.use(express.json());

// Base URL: http://localhost:5000/

server.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

// Home Route
server.get("/", (req, res) => {
  res.end("🚀 Welcome to the Express Server!");
});

// Set Cookie Route
server.post("/set-cookie", (req, res) => {
  res.cookie("user_token", "vivek", {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 1 day
  });

  res.send({ status: "success", note: "🍪 Cookie has been set!" });
});

// Get Cookie Route
server.get("/get-cookie", (req, res) => {
  const token = req.cookies.user_token;

  res.send({ user: token || null });
});

// Delete Cookie Route
server.get("/delete-cookie", (req, res) => {
  res.clearCookie("user_token");
  res.send({ status: "cleared", message: "🧹 Cookie removed!" });
});

// Start Server
server.listen(5000, (err) => {
  if (!err) {
    console.log("✅ Server is up and running at http://localhost:5000");
  }
});
