let fs = require("fs");

const writeAndRead = (path, obj) => {
  fs.writeFile(path, JSON.stringify(obj), (error) => {
    if (error) throw error;
    fs.readFile(path, (error, datos) => {
      if (error) throw error;
      console.log(JSON.parse(datos));
    });
  });
};

// writeAndRead("./miFichero.json", {calle: "Teruel", numero: 8});

module.exports = { writeAndRead };
