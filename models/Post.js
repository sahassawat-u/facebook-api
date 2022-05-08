const mongoose = require("mongoose");
// const mongoose = requier
const PostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    maxlength: 50,
    minlength: 3,
  },
  message: {
    type: String,
    required: [true, "Please provide message"],
    maxlength: 100,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
  },
  timestamp: {
    type: Date,
    required: [true],
  },
  image: {
    type: String,
  },
  postImage: {
    type: String,
    // contentType: String,
  },
});

module.exports = mongoose.model("Post", PostSchema);
