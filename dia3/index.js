const express= require('express');
const app = express();

app.get('/', function (req, res){
    console.log("Petición recibida por cliente");

    console.log("URL de la peticion: " + req.url)
    console.log("Metodo de la peticion: " + req.method)
    console.log("User Agent: " + req.headers["user-agent"]);
    
    res.status(200).json({ok:true, message: "Recibido!"})
})

app.get('/bye', function (req,res){
    res.status(200).json({ok:true,message:"Adios!"})
})

app.listen(3000);