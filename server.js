// brutusin.org/json-forms/- - load the json file there directly
// http: //github.com/YousefED/typescript-json-schema
// https://github.com/brutusin/json-forms
var resolve = require("path").resolve;

var TJS = require("typescript-json-schema");

const program = TJS.getProgramFromFiles([resolve("./iConfig.ts")]);
const schema = TJS.generateSchema(program, "IConfig");

var fs = require("fs")
fs.writeFileSync("schema.json", JSON.stringify(schema, null, 2))
///------------------ generate the form then
