const Post = require("../models/Post");
const { StatusCodes } = require("http-status-codes");

const getAllPosts = async (req, res) => {
  const posts = await Post.find({}).sort("-timestamp");
  res.status(StatusCodes.OK).json({ posts });
};
const createPost = async (req, res) => {
  const post = await Post.create(req.body);
  res.status(StatusCodes.CREATED).json({ post });
};

module.exports = {
  getAllPosts,
  createPost,
};
