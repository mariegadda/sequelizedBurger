var express = require("express");
var router = express.Router();

//imports the model, burger.js to use its database functions
var db = require("../models");
//var burger = require("../models/burger.js");

//create all routes and set up logic within these routes where required

router.get("/", function(req, res) {
  db.Burger.findAll({})
  .then(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  db.Burger.create({
    burger_name: req.body.name
  }).then(function(burgerData){
    //res.json(burgerData);
    res.redirect("/");
  });
});

router.post("/:id", function(req, res) {
  var id = req.params.id;

  db.Burger.update({
    devoured: req.body.devoured
  }, {
    where: {id: id}
  }).then(function(burgerData){
    res.redirect("/");
  });
});


module.exports = router;