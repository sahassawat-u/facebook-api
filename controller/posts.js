const Post = require("../models/Post");
const { StatusCodes } = require("http-status-codes");
const axios = require("axios");

const getAllPosts = async (req, res) => {
  const posts = await Post.find().sort("-timestamp");
  res.status(StatusCodes.OK).json({ posts });
};
const createPost = async (req, res) => {
  // console.log(req.body);
  const { postImage, ...rest } = req.body;
  // console.log(rest);
  try {
    const data = new FormData();
    data.append("file", postImage);
    data.append("upload_preset", "default-preset");
    const uploadImage = await axios.post(
      "https://api.cloudinary.com/v1_1/doy4bvcru/image/upload",
      data
    );

    console.log(uploadImage.data.url);
  } catch (error) {
    console.log(error);
  }
  // const post = await Post.create(req.body);
  res.status(StatusCodes.CREATED).json({ post: 1 });
};

module.exports = {
  getAllPosts,
  createPost,
};
