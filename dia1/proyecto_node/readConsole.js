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

// readConsoleThenCatch(console.log)

async function readConsoleAsyncAwait(callback) {
  try {
    let obj = {};
    let pregunta1 = await pregunta("Name?");
    obj.name = pregunta1;
    let pregunta2 = await pregunta("Surname?");
    obj.surname = pregunta2;
    let pregunta3 = await pregunta("Age?");
    obj.age = pregunta3;
    await callback(obj);
  } catch (err) {
    console.log(err);
  }
}

//readConsoleAsyncAwait(console.log)

module.exports = { readConsoleThenCatch, readConsoleAsyncAwait };
