const {Router}  =  require('express');
const {Mensaje, Coment} = require("../model/model");
const rou = Router();    

function checkin(req, res, next) {
    console.log("Checkin antes del if");
    console.log(req.body);
    if (req.body.owner =="") {
      console.log('Error por anonimato');
      return res.redirect('/');
    }
    if (req.body.message =="") {
        console.log('Error por mensaje vacio');
        return res.redirect('/');        
    }
    next();
 }

rou
.get("/", async (req,res)=>{    
    const mensajes = await Mensaje.findAll({
        include:[{
            model: Coment
        }]
    });
    res.render("index",{mensajes: mensajes});   
})

.post('/',checkin, async (req,res)=>{
    const new_message = await Mensaje.create(req.body);
    res.redirect('/');  
});

rou
.get("/coment", async (req,res)=>{    
    const comentarios = await Coment.findAll();
    res.render("index",{comentarios: comentarios});   })

.post('/coment',checkin, async (req,res)=>{
    console.log(req.body);
    const new_coment = await Coment.create(req.body);
    res.redirect('/');  });

module.exports =rou;

