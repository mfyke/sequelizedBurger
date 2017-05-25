var express = require("express");
var moment = require("moment");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  // console.log(db.burgers);
  db.burgers.findAll({}).then(function(data) {
    var hbsObject = {
      burgers: data,
      img: "../public/assets/img/burger.png"
    };
    // console.log(hbsObject);

    res.render("index", hbsObject);
    // console.log(moment().format("YYYY-MM-DD HH:mm:ss"));
  });
});

router.post("/", function(req, res) {
  db.burgers.create({
    burger_name: req.body.name,
    date: moment().format("YYYY-MM-DD HH:mm:ss")
  }).then(function(data){
    res.redirect("/");
  });
});
//     "burger_name", "date"
//   }
//   ], [
//     req.body.name, moment().format("YYYY-MM-DD HH:mm:ss")
//   ], function() {
//     res.redirect("/");
//   });
// });

router.put("/:id", function(req, res) {
  // var condition = "id = " + req.params.id;

  // console.log("condition", condition);

  // burger.updateOne({
  //   devoured: req.body.devoured
  // }, condition, function() {
  //   res.redirect("/");
  // });


  // console.log(req.body.devoured);
  // console.log(req.params.id);
  db.burgers.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.redirect("/");
    });
});




// Export routes for server.js to use.
module.exports = router;