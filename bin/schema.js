const fs = require("fs");
const path = require("path");
const toJsonSchema = require("to-json-schema");

const ja = fs.readFileSync(path.resolve(__dirname, "..", "languages", "ja.json"), "utf8");
const schema = toJsonSchema(JSON.parse(ja));

fs.writeFileSync(path.resolve(__dirname, "..", "languages", "schema.json"), JSON.stringify(schema), null, 2);
