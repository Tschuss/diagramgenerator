const figlet = require("figlet");
const chalk = require("chalk");
const fs = require("fs");
const box = require("./box.js");
const arrow = require("./arrow.js");
const icon = require("./icon.js");
const ids = require("./id.js");

const path = "diagrams";
const APIGEE = "*APIGEE*";
const MDW = "*MDW*";

var xmlfinal = "";

console.log(
  chalk.red(
    figlet.textSync("Diagrams Generator", {
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    })
  )
);

/*
figlet("Diagram Generator", function (err, data) {
  if (err) {
    console.log("*******************\n* " + banner + "\n*******************");
    console.dir(error);
    return;
  }
  console.error(chalk.red(data));
});
*/

var diagramId = Date.now();
var filename = diagramId + ".xml";

console.log("Diagram ID: " + diagramId);

/*
console.log("Argumentos => " + process.argv);
for (var i = 0; i < process.argv.length; i++) {
  if (process.argv[i] == null || process.argv[i] != "") {
    continue;
  } else {
    if (process.argv[i].startsWith("name:")) {
      filename = process.argv[i].split(":")[1];
    } else if (process.argv[i].startsWith("type:")) {
      //do more stuff
    } else {
      //do nothing
    }
  }
}
*/

xmlfinal = processCSV("templates/application.csv");

fs.writeFileSync(
  path + "\\" + filename,
  fs
    .readFileSync("templates/diagram-prefix.xml_")
    .toString()
    .replace("##ID##", diagramId) +
    xmlfinal +
    fs.readFileSync("templates/diagram-sufix.xml_")
);

function processCSV(file) {
  var xml = "";
  var csv = fs.readFileSync(file).toString();
  var line = csv.split("\n");
  for (var i = 0; i < line.length; i++) {
    const rx = new RegExp("(.+)-(?:|\\[(.+):(.+)\\])->(?:(.+):(.*))");
    var parts = line[i].match(rx);
    //console.log(parts);
    if (parts == null || parts == "") {
      //proteccion contra lineas mal formadas
      if (line[1] != null && line[i] != "") console.error(line[i]);
      continue;
    }
    var from = parts[1].trim();
    var gateway = parts[2] ? parts[2].trim() : "";
    var desc = parts[3] ? parts[3].trim() : "";
    var to = parts[4].trim();
    var txt = parts[5].trim();

    //console.log(from + ";" + gateway + ";" + desc + ";" + to + ";" + txt);

    if (gateway != null && gateway != "") {
      if (!ids.getID(gateway + desc).exists) {
        if (gateway == "API") {
          xml += icon.apigee(gateway, desc);
        } else {
          xml += icon.mdw(gateway, desc);
        }
      }
    }
    if (!ids.getID(from).exists) {
      //crear la caja
      xml += box.obox(from);
    }
    if (!ids.getID(to).exists) {
      //crear la caja
      xml += box.obox(to);
    }
    if (gateway != null && gateway != "") {
      xml += arrow.arrow(from, gateway + desc, txt);
      xml += arrow.arrow(gateway + desc, to, "");
    } else {
      xml += arrow.arrow(from, to, txt);
    }
  }
  return xml;
}
