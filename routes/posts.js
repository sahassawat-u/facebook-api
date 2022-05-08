const express = require("express");
const router = express.Router();

const { getAllPosts, createPost } = require("../controller/posts");
router.route("/").get(getAllPosts).post(createPost);
// router.route('/:id')

module.exports = router;
