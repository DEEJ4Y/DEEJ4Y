require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://admin-david:" +
    process.env.MONGO_ATLAS_PASSWORD +
    "@cluster0.u7o6u.mongodb.net/ProjectsDB?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const projectSchema = new mongoose.Schema({
  name: String,
  info: String,
  url: String,
  type: String,
});

const Project = mongoose.model("Project", projectSchema);

app
  .route("/")
  .get((req, res) => {
    res.render("home.ejs");
  })
  .post((req, res) => {
    const requestedPage = req.body.requestedPage;
    if (requestedPage == "projects") {
      res.render("projects.ejs");
    } else if (requestedPage == "contact") {
      res.render("contact.ejs");
    } else if (requestedPage == "home") {
      res.render("home.ejs");
    } else {
      res.render("error.ejs");
    }
  });

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on port 3000");
});
