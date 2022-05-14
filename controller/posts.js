const Post = require("../models/Post");
const { StatusCodes } = require("http-status-codes");
const axios = require("axios");
const FormData = require("form-data");
const sse = require("../sse");

const getAllPosts = async (req, res) => {
  const posts = await Post.find().sort("-timestamp");
  res.status(StatusCodes.OK).json({ posts });
};
const createPost = async (req, res) => {
  const post = await Post.create(req.body);
  if (post) {
    console.log("send sse to post");
    sse.send(post, "post");
  }
  res.status(StatusCodes.CREATED).json({ post });
};

module.exports = {
  getAllPosts,
  createPost,
};
