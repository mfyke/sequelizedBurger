var express = require("express");
var moment = require("moment");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data,
      img: "../public/assets/img/burger.png"
    };
    console.log(hbsObject);

    res.render("index", hbsObject);
    console.log(moment().format("YYYY-MM-DD HH:mm:ss"));
  });
});

router.post("/", function(req, res) {
  burger.insertOne([
    "burger_name", "date"
  ], [
    req.body.name, moment().format("YYYY-MM-DD HH:mm:ss")
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});



// Export routes for server.js to use.
module.exports = router;