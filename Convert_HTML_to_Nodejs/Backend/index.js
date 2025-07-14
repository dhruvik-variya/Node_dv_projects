const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.port;

app.use(cors());

const users = [
  {
    id: 1,
    email: "john@gmail.com",
    username: "johnd",
    password: "m38rmF$",
    name: { firstname: "john", lastname: "doe" },
  },
  {
    id: 2,
    email: "morrison@gmail.com",
    username: "mor_2314",
    password: "83r5^_",
    name: { firstname: "david", lastname: "morrison" },
  },
  {
    id: 3,
    email: "kevin@gmail.com",
    username: "kevinryan",
    password: "kev02937@",
    name: { firstname: "kevin", lastname: "ryan" },
  },
  {
    id: 4,
    email: "don@gmail.com",
    username: "donero",
    password: "ewedon",
    name: { firstname: "don", lastname: "romer" },
  },
  {
    id: 5,
    email: "derek@gmail.com",
    username: "derek",
    password: "jklg*_56",
    name: { firstname: "derek", lastname: "powell" },
  },
];

app.get("/", (req, res) => res.send("Server is Ready for serve."));

app.get("/user", (req, res) => res.json(users));

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});
