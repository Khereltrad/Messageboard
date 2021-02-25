const {Router}  =  require('express');
const {Mensaje} = require("../model/model");
const rou = Router();    

rou.get("/", async (req,res)=>{      
    const mensajes = await Mensaje.findAll();
    res.render("index",{mensajes: mensajes});
});

rou.post('/', async (req,res)=>{
    console.log(req.body);
    const new_message = await Mensaje.create(req.body);
    res.redirect('/');
});

// rt.get("/", async (req, res) => {
//     const mensajes = await Mensaje.findAll();
//     res.render("index", { quotes: quotes });
//   });


// rou.post("/usuario/new", async (req,res)=>{
//     // const new_users = await Usuario.create({});
//     console.log(req.body);
//     res.redirect("/usuarios");
// });

module.exports =rou;

// rt.get("/", async (req, res) => {
//     const quotes = await Cita.findAll();
//     res.render("index", { quotes: quotes });
//   });