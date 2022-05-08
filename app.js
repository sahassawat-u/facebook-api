require("dotenv").config();
require("express-async-errors");

const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
// const rateLimit = require("express-rate-limit");

const mongoose = require("mongoose");
const express = require("express");
const connectDB = require("./db/connect");
const app = express();

const postsRouter = require("./routes/posts");
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

app.get("/", (req, res) => {
  res.send("posts api");
});

app.use("/api/v1/posts", postsRouter);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Sever is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
