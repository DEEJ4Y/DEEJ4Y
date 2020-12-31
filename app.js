const express = require("express");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("home.ejs");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port 3000");
});
