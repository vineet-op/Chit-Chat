const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
dotenv.config();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Api is on");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

app.listen(PORT, console.log("Started on port 4000"));
