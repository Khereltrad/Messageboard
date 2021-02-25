const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(require('./routes/routes'));   
// app.get('/',(req,res)=>{ res.json({ message:"Bienvenido a la raiz,Use la extención /users para llegar al ejs"}); });
app.use(express.static(__dirname+"/public"));



app.listen( port, () => console.log(`Listening on port: ${port}`) );
