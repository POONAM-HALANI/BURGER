var orm = require("../config/orm");

const burger = {
  all: function(callBack) {
    orm.all("burgers", function(res) {
      callBack(res);
    });
  },
  create: function(columns, values, callBack) {
    orm.create("burgers", columns, values, function(res) {
      callBack(res);
    });
  },
  update: function(objColVals, condition, callBack) {
    orm.update("burgers", objColVals, condition, function(res) {
      callBack(res);
    });
  }
};

module.exports = burger;