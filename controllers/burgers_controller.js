var express = require("express");
var router = express.Router();

//imports the model, burger.js to use its database functions
var db = require("../models");

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
  var burger_name = req.body.name;
  if (burger_name === "") {
    console.log("You must enter a burger name!");
  }else{
  db.Burger.create({
    burger_name: burger_name
  }).then(function(burgerData){
    res.redirect("/");
  });
  }
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