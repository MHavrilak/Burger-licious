var orm = require("../config/orm.js");
var eatBurger = {
    all: function(cb) {
        orm.selectAll("burgers", cb);
    }, 
    create: function(burger_name, cb) {
        orm.insertOne("burger_name", burger_name, cb);
    },
    update: function(burger_name, cb) {
        orm.updateOne("burger_name", burger_name, cb);
    }
}

module.exports = eatBurger;