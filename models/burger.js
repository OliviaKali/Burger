var orm = require("../config/orm");

// * Inside `burger.js`, import `orm.js` into `burger.js`
// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
// * Export at the end of the `burger.js` file.

var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(condition, cb) {
      orm.update("burgers",{
        devoured: true
      }, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb) {
      orm.delete("burgers", condition, function(res) {
        cb(res);
      });
    }
  };

module.exports = burger;