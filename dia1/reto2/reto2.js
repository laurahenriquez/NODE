let fs = require ("fs") ; //fs modificar archivo, leer, crear, borrarb archivo etc,

let persom = {
    "name": "Laura",
    "surname": "Henriquez",
    "age" : "29"
    
};

fs.writeFile("persom.json",JSON.stringify/*convertir json en texto*/(persom),(error) =>{ //crear archivo
    if (error) throw error;
    console.log ("Archivo guardado");
    fs.readFile("persom.json",(error,datos)=> { // leer archivo 
        if(error) throw error;
        console.log(JSON.parse(datos));
   })
});