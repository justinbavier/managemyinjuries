var express = require("express");

var router = express.Router();

router.get("/", function(req, res) {
  res.render("index");
});

router.get("/material", function(req, res) {
  res.render("material");
});

module.exports = router;
