const fs = require("fs/promises");

function writeAndReadThenCatch(path, obj) {
  fs.writeFile(path, JSON.stringify(obj))
    .then(() => {
      return fs.readFile(path, "utf8");
    })
    .then((data) => {
      console.log(JSON.parse(data));
    })
    .catch((err) => {
      console.log(err);
    });
}



async function writeAndReadAsyncAwait(path, obj) {
  try {
    await fs.writeFile(path, JSON.stringify(obj));
    let data = await fs.readFile(path, "utf-8");
    console.log(JSON.parse(data));
  } catch (err) {
    console.log(err);
  }
}


module.exports = { writeAndReadThenCatch, writeAndReadAsyncAwait };
