var map = new Map();

function getID(name, create) {
  if (create == null) {
    create = true;
  }
  if (map.get(name) == null || map.get(name) == "") {
    var id = -1;
    if (create) {
      id = Math.random().toString().split(".")[1];
      map.set(name, id);
    }
    return { exists: false, id: id };
  } else {
    id = map.get(name);
    return { exists: true, id: id };
  }
}

module.exports = { getID };
