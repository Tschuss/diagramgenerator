const fs = require("fs");

const icons = new Map();
icons.set(
  "APIGEE",
  '<mxCell id="' +
    id +
    '" value="" style="' +
    fs.readFileSync("templates/apigee.svg") +
    '" vertex="1" parent="1">' +
    '<mxGeometry x="190" y="312" width="48" height="48" as="geometry" />' +
    "</mxCell>"
);
icons.set(
  "MDW",
  '<mxCell id="' +
    id +
    '" value="" style=""' +
    fs.readFileSync("templates/apigee.svg") +
    '" vertex="1" parent="1">' +
    '<mxGeometry x="190" y="312" width="48" height="48" as="geometry" />' +
    "</mxCell>"
);

function apigee() {
  var id = newID();
  map.set("APIGEE", id);
  var xml =
    '<mxCell id="' +
    id +
    '" value="" style="' +
    fs.readFileSync("templates/apigee.svg") +
    '" vertex="1" parent="1">' +
    '<mxGeometry x="190" y="312" width="48" height="48" as="geometry" />' +
    "</mxCell>";
  return xml;
}

function mdw(numero) {
  var id = newID();
  map.set("MDW" + numero, id);
  var xml = '<mxCell id="' + id + "-" + numero;
  '" value="" style="' +
    fs.readFileSync("templates/mdw.svg") +
    '" vertex="1" parent="1">' +
    '<mxGeometry x="190" y="312" width="48" height="48" as="geometry" />' +
    "</mxCell>" +
    '<mxGeometry width="48" height="48" as="geometry" />' +
    "</mxCell>" +
    '<mxCell id="' +
    id +
    '-2" value="' +
    (numero != null ? numero : "") +
    '" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="yprXkgl_wh5ysjy9TSO6-7">' +
    '<mxGeometry x="4" y="5.5" width="40" height="20" as="geometry" />' +
    "</mxCell>";
  return xml;
}

module.exports = { icon };
