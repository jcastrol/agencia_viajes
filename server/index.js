//importar Express
const express = require('express');
const path = require('path');
const bodyParser=require('body-parser')
const routes = require('./routes');

const configs =require('./config');

// db.authenticate()
//     .then(()=>console.log('DB conectada'))
//     .catch(err=>console.log(err));

//configurar express
const app = express();

//habilitar pug
app.set('view engine','pug');

//Añadir las vistas
app.set('views',path.join(__dirname, './views'));

//agregar carpeta estatica llamada public
app.use(express.static('public'));

//validar si estamos en desarrollo o en produccion
const config =configs[app.get('env')];

//creamos la variable para el sitio web
app.locals.titulo= config.nombresitio; 

//Muestra el año actual y genera la ruta
app.use((req,res,next)=>{
    //crear una nueva fecha
    const fecha =new Date();
    //crea variable local (res.locals.fechasActual)
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;
    return next();

});
//ejecutamos el bodyparser
app.use(bodyParser.urlencoded({extended:true}));
 


//cargar rutas
app.use('/',routes());

app.listen(3000);