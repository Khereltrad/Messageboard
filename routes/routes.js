const {Router}  =  require('express');
const {Mensaje, Coment} = require("../model/model");
const rou = Router();    

rou
.get("/", async (req,res)=>{    
    const mensajes = await Mensaje.findAll({
        include:[{
            model: Coment
        }]
    });
    console.log(mensajes);
    res.render("index",{mensajes: mensajes});   
})

.post('/', async (req,res)=>{
    const new_message = await Mensaje.create(req.body);
    res.redirect('/');  
});

rou
.get("/coment", async (req,res)=>{    
    const comentarios = await Coment.findAll();
    res.render("index",{comentarios: comentarios});   })

.post('/coment', async (req,res)=>{
    console.log(req.body);
    const new_coment = await Coment.create(req.body);
    res.redirect('/');  });

module.exports =rou;

