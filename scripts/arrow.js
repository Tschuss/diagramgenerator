const ids = require("./id.js");
const chalk = require("chalk");

function arrow(from, to, text) {
  var id = ids.getID(from + "-" + to + "-" + text).id;

  var from_to = ids.getIDs(from, to);
  var from_id = from_to.from.id;
  var to_id = from_to.to.id;

  console.log(
    chalk.blue("Arrow " + from + "--> " + to + " (" + from_to.entry + ")")
  );
  //console.log(from + ": " + from_id);
  //console.log(to + ": " + to_id);

  var entry = from_to.entry;

  var xml =
    '<mxCell id="' +
    id +
    '" value="' +
    text +
    '"  style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=' +
    entry +
    ';entryDx=0;entryDy=0;" edge="1" parent="1" ' +
    'source="' +
    from_id +
    '" target="' +
    to_id +
    '">' +
    //mueve el texto de la flecha hacia el lado de la punta
    '<mxGeometry x="0.5" relative="1" as="geometry" />\n\r' +
    '<mxPoint as="offset" />\n\r' +
    "</mxCell>\n\r";

  return xml;
}

module.exports = { arrow };
