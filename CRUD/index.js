const express = require("express");
const dbconnect = require("./config/db.js");
const User = require("./model/userSchema.js");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
app.use(express.json)


// get
app.get("/", (req,res)=>{
    res.send("welcome !!");
})

// creat user
app.post("/user", async (req,res)=>{
    const data = await User.create(req.body);
    res.send(data);
})

// get all user
app.get("/users", async (req,res)=>{
    const data = await User.find();
    res.send(data);
})

// find by id 
app.get("/users/:id", async(req,res)=>{
    const {id} = req.params;
    const data = await User.findById(id);
  res.send(data);
})


// Update 
app.patch("/users/:id", async (req, res) => {
  const { id } = req.params;
  const data = await User.findByIdAndUpdate(id, req.body, { new: true });
  res.send(data);
});

//  Delete
app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  const data = await User.findByIdAndDelete(id);
  res.send(data);
});


// Start
app.listen(process.env.PORT, () => {
  try {
    console.log(`Server is running on port ${process.env.PORT}`);
  } catch (error) {
    error.message("404-not found !")
  }
});

