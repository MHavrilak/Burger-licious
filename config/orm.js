var connection = require("./connection.js");

var orm = {
  select: function(whatToSelect, tableInput) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [whatToSelect, tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";

    console.log(queryString);

    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(col, name, cb) {
    var queryString = "INSERT INTO burgers (burger_name) VALUES (?);";
   
    console.log(col, name);

    connection.query(queryString, name, function(
      err,
      result
    ) {
        if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;