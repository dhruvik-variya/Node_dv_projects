const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// View all posts
router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.render("posts/home", { posts });
});

// New post form
router.get("/add", (req, res) => {
  res.render("posts/new");
});

// Save new post
router.post("/", async (req, res) => {
  await Post.create(req.body.post);
  res.redirect("/posts");
});

// View single post
router.get("/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("posts/view", { post });
});

// Edit post form
router.get("/:id/edit", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("posts/edit", { post });
});

// Update post
router.put("/:id", async (req, res) => {
  await Post.findByIdAndUpdate(req.params.id, req.body.post);
  res.redirect(`/posts/${req.params.id}`);
});

// Delete post
router.delete("/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect("/posts");
});

module.exports = router;
