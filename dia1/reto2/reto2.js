let fs = require ("fs") ;

let persom = {
    "name": "Laura",
    "surname": "Henriquez",
    "age" : "29"
    
};

fs.writeFile("persom.json",JSON.stringify(persom),(error) =>{
    if (error) throw error;
    console.log ("Archivo guardado");
    fs.readFile("persom.json",(error,datos)=> {
        if(error) throw error;
        console.log(JSON.parse(datos));
   })
});