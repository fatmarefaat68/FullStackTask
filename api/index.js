console.log("hello node");
// const express = require("express");
// const app = express();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const Port = process.env.PORT || 3000;
const result = require("./routes/result");

const connectDb = async () => {
  try {
    mongoose.set("strictQuery", false);
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      "database connected...",
      //   connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    throw error;
  }
};

app.use(cors());
app.use(express.json());
app.use("/result", result);

app.listen(Port, () => {
  console.log(`listening on port ${Port}`);
  connectDb();
});
