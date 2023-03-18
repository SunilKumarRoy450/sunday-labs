const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    image: { type: String, required: false },
  },
  { timestamps: true }
);

const UserModel = new model("User", UserSchema);

module.exports = UserModel;
