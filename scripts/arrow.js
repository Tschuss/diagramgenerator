const ids = require("./id.js");
const chalk = require("chalk");

function arrow(from, to, text) {
  var id = ids.getID(from + "-" + to + "-" + text).id;

  var from_id = ids.getID(from, false).id;
  var to_id = ids.getID(to, false).id;

  console.log(chalk.green("Arrow from: " + from + " to: " + to));
  //console.log(from + ": " + from_id);
  //console.log(to + ": " + to_id);

  var xml =
    '<mxCell id="' +
    id +
    '" value="' +
    text +
    '"  style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;" edge="1" parent="1" ' +
    'source="' +
    from_id +
    '-1" target="' +
    to_id +
    '-1">' +
    '<mxGeometry relative="1" as="geometry" />\n' +
    "</mxCell>\n";

  return xml;
}

module.exports = { arrow };
