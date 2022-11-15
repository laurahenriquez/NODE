const { readConsole } = require("./readConsole.js");
const { writeAndRead } = require("./writeAndReadObject.js");

readConsole((persona) => {
  writeAndRead("./persona.json", persona);
});
