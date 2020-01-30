var express = require('express');
var burgers = require('../models/burger.js');
var router = express.Router();


router.get("/", function(req, res) {
    burgers.all(function(data) {
      var order = {
        burgers: data
      };
      console.log(order);
      res.render("index", order);
    });
  });

  router.post("/api/burgers", function(req, res) {
    burgers.create(req.body.name, function(result) {
     
      res.json({ id: result.insertId });
    });
  });

  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burgers.update(
      {
        devoured: req.body.devoured
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });

  module.exports = router;