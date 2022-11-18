const readline = require("readline");
//convierte readline a promesas
function pregunta(pregunta) {
  const question = new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(pregunta, (respuesta) => {
      resolve(respuesta);
      rl.close();
    });
  });
  return question;
}

function readConsoleThenCatch(callback) {
  let obj = {};
  pregunta("¿Nombre del usuario? ")
    .then((name) => {
      obj.name = name;
      return pregunta("¿Apellido del usuario? ");
    })
    .then((surname) => {
      obj.surname = surname;
      return pregunta("¿Edad del usuario? ");
    })
    .then((age) => {
      obj.age = age;
      return callback(obj);
    })
    .catch((err) => {
      console.log(err);
    });
}



module.exports = { readConsoleThenCatch, readConsoleAsyncAwait };
