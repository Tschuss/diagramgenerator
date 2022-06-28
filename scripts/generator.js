const figlet = require("figlet");
const chalk = require("chalk");
const fs = require("fs");
const box = require("./box.js");
const arrow = require("./arrow.js");
const ids = require("./id.js");

const path = "diagrams";

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

var filename = new Date().getTime() + ".xml";

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

console.log("filename: " + filename);

xmlfinal = processCSV("templates/application.csv");

var diagramId = Date.now();
console.log("Diagram ID: " + diagramId);

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
  var applications = csv.split("\n");
  for (var i = 0; i < applications.length; i++) {
    var apps = applications[i].split(",");
    if (apps.length < 2) {
      //proteccion contra lineas vacias o mal formadas
      continue;
    }
    var from = apps[0].trim();
    var to = apps[1].trim();
    var txt = apps[2] != null ? apps[2].trim() : "";

    if (!ids.getID(from).exists) {
      //crear la caja
      xml += box.obox(from);
    }
    if (!ids.getID(to).exists) {
      //crear la caja
      xml += box.obox(to);
    }
    if (!ids.getID(from + "-" + to + "-").exists) {
      //crear flecha
      xml += arrow.arrow(from, to, txt);
    }
  }
  return xml;
}
