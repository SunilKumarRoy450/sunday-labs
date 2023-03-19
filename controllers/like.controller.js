const express = require("express");
const LikeModel = require("../models/Likes.model");
const router = express.Router();

//get like
router.get("/", async (req, res) => {
  try {
    const allLikes = await LikeModel.find().populate("userId");
    return res.status(200).send(allLikes);
  } catch (error) {
    return res.send({ msg: "Something went wrong" });
  }
});

//like Creation
router.post("/create", async (req, res) => {
  const { userId, like, postId } = req.body;
  try {
    const likes = new LikeModel({ userId, like, postId });
    await likes.save();
    return res.status(201).send(likes);
  } catch (error) {
    return res.status(500).send({ msg: error.message });
  }
});

//like delete
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedData = await LikeModel.findByIdAndDelete({ _id: id });
    return res.status(200).send(deletedData);
  } catch (error) {
    return res.send(error);
  }
});

module.exports = router;
