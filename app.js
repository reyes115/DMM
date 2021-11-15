// REQUEST FROM EXPRESS
const express=require('express');
// REQUEST FROM PATH
const path=require('path');
// REQUEST FROM SESSION
const session=require('express-session');
//CONST APP 
const app=express();
// REQUEST FROM USUARIOS 
const usuario=require('./rutas/usuario');
// REQUEST FROM RUTAS 
const rutas=require('./rutas/rutas');
// STATIC RUTE 
app.use('/estatico',express.static(path.join(__dirname,'public')));
//EJS VIEWS 
app.set('view engine','ejs');
// DATA FOR FORM
app.use(express.urlencoded({extended:true}));
// SESSION
app.use(session({
    secret:'qwerty123',
    resave:true,
    saveUninitialized:true
}));  

// PRINCIPAL RUTE IN APP FROM USER AND RUTES
app.use('/',usuario);
app.use('/ruta',rutas)

//APP'S PORT
app.listen(3008,()=>{
    console.log("LA MICRO.com connected in 3008");
});

