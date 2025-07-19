const express = require("express");
const Movie = require("../models/Movie");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Auth middleware
function verifyToken(req, res, next) {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).send("Access denied: No token provided");

  jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
    if (err) return res.status(403).send("Invalid token");
    req.userId = data.id;
    next();
  });
}

// Add new movie
router.post("/", verifyToken, async (req, res) => {
  const { title, description, rating, review } = req.body;
  const movie = await Movie.create({
    title,
    description,
    rating,
    review,
    user: req.userId,
  });
  res.json(movie);
});

// Get all movies
router.get("/", async (req, res) => {
  const movies = await Movie.find().populate("user", "username");
  res.json(movies);
});

module.exports = router;
