

let fs = require("fs/promises");
let readline = require("readline");

let persona = {
     "name" : "",
     "surname" : "",
     "age" : 0
 };

function pregunta(pregunta){
    const question = new Promise((resolve,reject)=>{
        const rl = readline.createInterface({
            input : process.stdin,
            output : process.stdout
        });
        rl.question(pregunta, (respuesta)=>{
            resolve(respuesta);
            rl.close();
        });
    });
    return question;
}

pregunta("¿Cual es tu nombre? ")
.then((nombre)=>{
    persona.name = nombre;
    return pregunta("¿cual es tu apellido? ")
})
.then((apellido)=>{
    persona.surname = apellido;
    return pregunta("¿cual es tu edad? ")
})
.then((edad)=>{
    persona.age = edad;
    return fs.writeFile("persona.json", JSON.stringify(persona))
.then(()=>{
    return fs.readFile("persona.json");
})
.then(personaRaw =>{
    console.log(JSON.parse(personaRaw));
})
})
.catch((error)=>{
    console.log(error);
})