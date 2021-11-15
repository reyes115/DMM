//REQUEST FROM SEQUELIZE 
const Sequelize=require('sequelize');
// REQUEST FROM USARIO/MODELOS 
const UsuariosModelo=require('./modelos/usuario');
// REQUES FROM RUTAS/MODELOS
const RutasModelo=require('./modelos/rutas');
//REQUEST FROM CONEXION ---> DB'S NAME/USER/PASSWORD/ OBJ
const conexion=new Sequelize('micro','root','root',{
    host:'localhost',
    dialect:'mysql'
});

// CALL TO USUARIOSMODELO
const Usuario=UsuariosModelo(conexion);
const Ruta=RutasModelo(conexion);
// RUN THE APP WITH A INSTRUCTION 
conexion.sync({force:false})
.then(()=>{
    console.log("Connected to Myslq");
})
.catch((err)=>{
    console.log("Connection to Mysql failed "+err);
});

//MODULE.EXPORTS 
module.exports={
    Usuario,
    Ruta
}
