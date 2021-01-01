const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

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
