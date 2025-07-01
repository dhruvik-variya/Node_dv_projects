const express = require("express");
const port = 8090;
const app = express();

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views')); 
app.use(express.urlencoded({ extended: true }));

// data store
let studentData = [];

// Home page
app.get("/", (req, res) => {
  res.render("home");
});

//student list
app.get("/form", (req, res) => {
  res.render("form", { student: studentData });
});

// Edit
app.get("/editdata", (req, res) => {
  const editId = parseInt(req.query.id);

  const student = studentData.find((stu) => stu.userid === editId);

 res.render("edit", { student });
});

// Update student
app.post("/edituser", (req, res) => {
  const editId = parseInt(req.body.editid);

  studentData = studentData.map((stu) => {
    if (stu.userid === editId) {
      return {
        ...stu,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };
    }
    return stu;
  });

  console.log("Student updated:", editId);
  res.redirect("/form");
});

// Delete student
app.get("/deletedata", (req, res) => {
  const deleteId = parseInt(req.query.id);

  studentData = studentData.filter((stu) => stu.userid !== deleteId);

  console.log("Student deleted:", deleteId);
  res.redirect("/form");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
