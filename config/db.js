const mongoose = require("mongoose");

const connectDB = () => {
  return mongoose
    .connect(
      `mongodb://labs:labs@ac-qlszzw6-shard-00-00.ohbjxwf.mongodb.net:27017,ac-qlszzw6-shard-00-01.ohbjxwf.mongodb.net:27017,ac-qlszzw6-shard-00-02.ohbjxwf.mongodb.net:27017/?ssl=true&replicaSet=atlas-gxpdq3-shard-0&authSource=admin&retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log(`DataBase is connected`))
    .catch((err) => console.log(err));
};
module.exports = connectDB;
