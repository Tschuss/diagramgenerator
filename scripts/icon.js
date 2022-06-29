const fs = require("fs");
const ids = require("./id.js");
const chalk = require("chalk");

/*
const icons = new Map();
icons.set(
  "APIGEE",
  '<mxCell id="' +
    id +
    '" value="" style="' +
    fs.readFileSync("templates/apigee.svg") +
    '" vertex="1" parent="1">' +
    '<mxGeometry x="190" y="312" width="48" height="48" as="geometry" />\n\r' +
    "</mxCell>\n\r"
);
icons.set(
  "MDW",
  '<mxCell id="' +
    id +
    '" value="" style=""' +
    fs.readFileSync("templates/apigee.svg") +
    '" vertex="1" parent="1">' +
    '<mxGeometry x="190" y="312" width="48" height="48" as="geometry" />\n\r' +
    "</mxCell>\n\r"
);

*/

function apigee(name, txt) {
  var id = ids.getID(name + txt).id;

  console.log(chalk.red("Icon " + (name + txt) + ": " + id));

  var xml =
    '<mxCell id="' +
    id +
    '" value="' +
    txt +
    '" style="' +
    fs.readFileSync("templates/apigee.svg") +
    '" vertex="1" parent="1">\n' +
    '<mxGeometry x="190" y="312" width="48" height="48" as="geometry" />\n\r' +
    "</mxCell>\n\r";
  return xml;
}

function mdw(name, number) {
  var id = ids.getID(name + number).id;
  var id_child = ids.getID(name + number + "-title").id;
  console.log(chalk.magenta("Icon " + (name + number) + ": " + id));

  var xml =
    '<mxCell id="' +
    id +
    '" value="" style="' +
    fs.readFileSync("templates/mdw.svg") +
    '" vertex="1" parent="1">' +
    '<mxGeometry x="190" y="312" width="48" height="48" as="geometry" />\n\r' +
    "</mxCell>\n\r" +
    '<mxCell id="' +
    id_child +
    '" value="' +
    (number != null && number != "" ? number : name) +
    '" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="' +
    id +
    '">\n' +
    '<mxGeometry x="4" y="5.5" width="40" height="20" as="geometry" />\n\r' +
    "</mxCell>\n\r";
  return xml;
}

module.exports = { apigee, mdw };
