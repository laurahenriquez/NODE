let fs =require("fs/promises");

let persona = {
    "name" : "Laura",
    "surname" : "Henriquez",
    "age" : "29"
};

fs.writeFile("persona.json", JSON.stringify(persona))
.then(()=>{
    return fs.readFile("persona.json");
})
.then(personaRaw =>{
    console.log(JSON.parse(personaRaw));
})
.catch(error =>{
    console.log(error);
})