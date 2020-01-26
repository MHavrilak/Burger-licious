var orm = require("./config/orm.js");

orm.selectAll("burger_name", "devoured");

orm.insertOne("burger_name", "devoured");

orm.updateOne("burger_name", "devoured");

modeule.exports = orm;