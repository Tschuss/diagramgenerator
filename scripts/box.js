const ids = require("./id.js");
const chalk = require("chalk");

function box(name) {
  var id = ids.getID(name).id;
  console.log(chalk.blue("Box " + name + ": " + id));

  var size = getSize(name);

  var xml =
    '<mxCell id="' +
    id +
    '" value="' +
    name +
    '" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">\n' +
    '    <mxGeometry x="340" y="200" width="' +
    size.width +
    '" height="' +
    size.height +
    '" as="geometry" />\n' +
    "</mxCell>\n";

  return xml;
}

function obox(name) {
  var id = ids.getID(name).id;
  console.log(chalk.blue("Box " + name + ": " + id));

  var size = getSize(name);

  var xml =
    '<mxCell id="' +
    id +
    '-1" value="" style="rounded=0;whiteSpace=wrap;html=1;fillColor=none;strokeColor=#d79b00;strokeWidth=2;" vertex="1" parent="1">' +
    '<mxGeometry x="360" y="360" width="' +
    size.width +
    '" height="' +
    (size.height + 50) +
    '" as="geometry" />' +
    "</mxCell>" +
    '<mxCell id="' +
    id +
    '-2" value="' +
    name +
    '" style="rounded=0;whiteSpace=wrap;html=1;arcSize=27;fillColor=#ffe6cc;strokeColor=#d79b00;strokeWidth=2;" vertex="1" parent="' +
    id +
    '-1">' +
    '<mxGeometry x="0" y="0" width="' +
    size.width +
    '" height="' +
    size.height +
    '" as="geometry" />' +
    "</mxCell>";
  /*
    '<mxCell id="' +
    id +
    '" value="' +
    name +
    '" style="rounded=1;whiteSpace=wrap;html=1;" vertex="1" parent="1">\n' +
    '    <mxGeometry x="340" y="200" width="' +
    size.width +
    '" height="' +
    size.height +
    '" as="geometry" />\n' +
    "</mxCell>\n";
*/
  return xml;
}

function getSize(name) {
  var words = name.split(" ");
  var maxlength = 0;

  words.forEach((word) => {
    if (word.length > maxlength) {
      maxlength = word.length;
    }
  });

  var maxlines = 0;
  var linelength = 0;
  words.forEach((word) => {
    if (linelength + word.length > maxlength) {
      maxlines++;
      linelength = 0;
    } else {
      linelength += word.length;
    }
  });
  var width = 10 + maxlength * 10;
  if (width < 80) {
    width = 80;
  }
  var height = 10 + maxlines * 10;
  if (height < 30) {
    height = 30;
  }
  return { width: width, height: height };
}

module.exports = { box, obox };
