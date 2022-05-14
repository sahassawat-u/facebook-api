const Post = require("../models/Post");
const { StatusCodes } = require("http-status-codes");
const axios = require("axios");
const FormData = require("form-data");

const getAllPosts = async (req, res) => {
  const posts = await Post.find().sort("-timestamp");
  res.status(StatusCodes.OK).json({ posts });
};
const createPost = async (req, res) => {
  // console.log(req.body);
  // const { postImage, ...rest } = req.body;
  // console.log(req.body);
  // console.log(rest);
  // try {
  //   const data = new FormData();
  //   data.append("file", postImage);
  //   data.append("tags", `doy4bvcr, medium, gist`);
  //   data.append("upload_preset", "upload1"); // Replace the preset name with your own
  //   data.append("api_key", "714733861717221"); // Replace API key with your own Cloudinary key
  //   data.append("timestamp", (Date.now() / 1000) | 0);

  //   await axios
  //     .post("https://api.cloudinary.com/v1_1/doy4bvcr/image/upload", data, {
  //       headers: { "X-Requested-With": "XMLHttpRequest" },
  //     })
  //     .then((response) => {
  //       const data = response.data;
  //       const fileURL = data.secure_url; // You should store this URL for future references in your app
  //       // console.log(data);
  //       const _post = { ...rest, postImage: fileURL };
  //       // console.log(_post);
  //       const post = Post.create(_post);
  //       res.status(StatusCodes.CREATED).json({ post });
  //     });
  // await axios.post(
  //   "https://api.cloudinary.com/v1_1/doy4bvcr/image/upload",
  //   data
  // );
  // .then((response) => {
  //   console.log(response.data);
  //   return response.data;
  // });

  // console.log(uploadImage.data);
  // return
  const post = await Post.create(req.body);
  res.status(StatusCodes.CREATED).json({ post });
  // } catch (error) {
  //   console.log(error.code);
  // }
  // const post = await Post.create(req.body);
};

module.exports = {
  getAllPosts,
  createPost,
};
