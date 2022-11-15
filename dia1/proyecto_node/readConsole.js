const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

const readConsole = (callback) => {
    let persona = {};

    rl.question('¿Nombre del usuario? ', (nombre) => {
        persona.name = nombre;
        rl.question('¿Apellido del usuario? ', (apellido) => {
            persona.surname = apellido;
            rl.question('¿Edad del usuario? ', (edad) => {
                persona.age = edad;
                rl.close();
                callback(persona);
            })
        })
    })
}


// readConsole(console.log) 

module.exports = { readConsole };
