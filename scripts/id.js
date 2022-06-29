const chalk = require("chalk");

var map = new Map();
var count = 1;
var prefix = "";

var arrow_targets = new Map();

function getIDs(from, to) {
  var idFrom = getID(from, false);
  var idTo = getID(to, false);

  var entry = arrow_targets.get(to);

  // console.log(chalk.red(to + ": " + entry));

  // if (entry == null || entry < 0) {
  arrow_targets.set(to, 0);
  return { from: idFrom, to: idTo, entry: 0 };
  // } else {
  //  arrow_targets.set(to, entry + 1);
  //   return { from: idFrom, to: idTo, entry: entry + 1 };
  //}
}

function getID(name, create) {
  if (create == null) {
    create = true;
  }
  if (prefix == null || prefix == "") {
    prefix = Math.random().toString().split(".")[1];
  }
  if (map.get(name) == null || map.get(name) == "") {
    var id = -666;
    if (create) {
      id = prefix + "-" + count++;
      map.set(name, id);
    }
    return { exists: false, id: id };
  } else {
    id = map.get(name);
    return { exists: true, id: id };
  }
}

module.exports = { getID, getIDs };
