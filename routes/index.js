var express = require("express");
var path = require("path");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// Use path to get cwd, go up a level, enter views and serve index.html
router.get("/index", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "..", "views/index.html"));
});

module.exports = router;
