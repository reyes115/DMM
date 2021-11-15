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
const port=process.env.PORT || 3000; //--> Estamos optiendo el puerto que nos estan mandando

app.listen(port,()=>{
	console.log('Servidor en el puerto '+port);
});


