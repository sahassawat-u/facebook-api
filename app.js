require("dotenv").config();
require("express-async-errors");

const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");

// const rateLimit = require("express-rate-limit");

const mongoose = require("mongoose");
const express = require("express");
const connectDB = require("./db/connect");
const sseRoute = require("./routes/sse");
const compression = require("compression");

const app = express();

const postsRouter = require("./routes/posts");
app.use(express.json());
app.use(compression());
app.use(helmet());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(xss());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("facebook api");
});

app.use(sseRoute);
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
