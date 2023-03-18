const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080;
const connectDB = require("./config/db");
const UserRoute = require("./controllers/user.controller");
const PostRoute = require("./controllers/post.controller");
const CommentRoute = require("./controllers/comment.controller");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/users", UserRoute);
app.use("/posts", PostRoute);
app.use("/comments", CommentRoute);

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server is running on PORT ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
