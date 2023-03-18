const express = require("express");

const cors = require("cors");
const app = express();
const PORT = 8080;
const connectDB = require("./config/db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server is running on PORT ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
