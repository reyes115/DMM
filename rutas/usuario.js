//REQUEST FROM EXPRESS 
const express=require('express');


//REQUEST FROM RUTA
const ruta=express.Router();
const {Usuario}=require('../conexion');
const nodemailer=require('nodemailer');
const usuario = require('../modelos/usuario');

const bienvenido=((req,res,next)=>{
    console.log("Bienvenido a la MICRO.COM");
    next();
});

const primerDato=((req,res,next)=>{
    console.log("Estos son los primeros datos extraidos del formulario:");
    next();
});
const segundoDato=((req,res,next)=>{
    console.log("Estos son los datos que seran almacenados dentro de la pagina:");
    next();
})


ruta.post('/datosAlumnos',(req,res)=>{

    var grupo=req.body.grupo;
    var carrera=req.body.carrera; 
    
    res.send(req.body); //--> req es un objeto
    console.log(req.body);
    
});

ruta.get('/mapaprincipal',(req,res)=>{
    res.render('mapaPrincipal');
});

//RUTA LOGIN
ruta.get('/',bienvenido,(req,res)=>{
    res.render('welcome');
});
// RUTA NEW USER
ruta.get('/new',(req,res)=>{
    res.render('new');
});
//RUTA CALLCENTER
ruta.get('/callcenter',(req,res)=>{
    res.render('callcenter');
});

// RUTA POST NEW
ruta.post('/new',(req,res)=>{
    Usuario.create(req.body)
    .then(()=>{
        res.redirect("/");
        
    })
    .catch((err)=>{
        console.log("Error al insertar el usuario "+err);        
    })
    
});

//PAY PAL
ruta.get('/paypal',(req,res)=>{
    if(!req.session.usuario){
        res.redirect('/404Error')
    }else{
    res.render('payPal');
    }
});
ruta.get('/paypalMensaje',(req,res)=>{
    res.render('paypalMensaje');
});

// RUTA GPS 
ruta.get('/gps',(req,res)=>{
    if(!req.session.usuario){
        res.redirect('/404Error')
    }else{
    res.render('gps');
    }
});

// RUTA USERS 
ruta.get('/users',(req,res)=>{
    if(!req.session.usuario){
        res.redirect('/404Error')
    }
    Usuario.findAll({where:{status:true}})
    .then((usu)=>{
        res.render('users',{users:usu});
    })
    .catch((err)=>{
        res.status(400).send("Error en la extracción")
    });
});
//RUTA NEWUSER 
ruta.get('/newUser',(req,res)=>{
    if(!req.session.usuario){
        res.redirect('/404Error')
    }else{
    res.render('newuser');
    }
});

//RUTA POST NEWUSER

ruta.post('/newuser',(req,res)=>{
    Usuario.create(req.body)
    .then(()=>{
        res.redirect("/users");
    })
    .catch((err)=>{
        console.log("Error al insertar el usuario "+err);        
    })

});

// RUTA LOGOUT
ruta.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/');
});

// RUTA MODIFICAR 
ruta.get('/modificarId/:id',(req,res)=>{
    Usuario.findAll({
        where:{
            id:req.params.id
        }
    })
    .then((usu)=>{
        res.render('modificar',{users:usu})
    })
    .catch((err)=>{
        res.status(400).send("Error al recuperar informacion "+err);
    });
});

// RUTA POST MODIFICAR
ruta.post('/modificar',segundoDato,(req,res)=>{
    const datos={
        name:req.body.nameNew,
        lastName:req.body.lastNameNew,
        email:req.body.emailNew,
        password:req.body.passwordNew,
        type:req.body.typeNew
    }
    Usuario.update(datos,{
        where:{
            id:req.body.idNew
        }
    })
    .then(()=>{
        res.redirect('/users');
    })
    .catch((err)=>{
        res.status(400).send("Error al modificar el usuario "+err);
    });
    console.log(datos);
});

//RUTA BORRAR 
ruta.get('/borrarId/:id',(req,res)=>{
    const datos={
        status:false
    }
    Usuario.update(datos,{where:{id:req.params.id}})
    .then(()=>{
        res.redirect('/users');
    })
    .catch((err)=>{
        res.status(400).send("Error al borrar el usuario "+err);
    });
});

//RUTA DELETEUSER
ruta.get('/deleteusers',(req,res)=>{
    if(!req.session.usuario){
        res.redirect('/404Error')
    }else{
    Usuario.findAll({where:{status:false}})
    .then((usu)=>{
        res.render('deleteusers',{users:usu});
    })
    .catch((err)=>{
        res.status(400).send("Error en la extracción")
    });
}
});

// RUTA ON 
ruta.get('/onId/:id',(req,res)=>{
    const datos={
        status:true
    }
    Usuario.update(datos,{where:{id:req.params.id}})
    .then(()=>{
        res.redirect('/deleteusers');
    })
    .catch((err)=>{
        res.status(400).send("Error al borrar el usuario "+err);
    });
});

//RUTA OFF1 
ruta.get('/Off1Id/:id',(req,res)=>{
    Usuario.destroy({where:{id:req.params.id}})
.then(()=>{
    res.redirect('/users');
})
.catch((err)=>{
    res.status(400).send("Error al eliminar registro "+err);
});
});

//RUTA HISTORIAL
ruta.get('/viajes',(req,res)=>{
    if(!req.session.usuario){
        res.redirect('/404Error')
    }else{
    res.render('historial');
    }
});

//RUTA POST CALL
ruta.post('/call',(req,res)=>{
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0" 
    const mensaje=`
    <h1>Mensaje de LA MICRO.COM</h1>
    <h3>Nombre: ${req.body.nameContac}</<h3>
    <h3>Correo: ${req.body.emailContac}</<h3>
    <h3>Mensaje: ${req.body.messageContac}</<h3>
` 
var transporter=nodemailer.createTransport({ 
    service:'gmail', 
    auth:{ 
        user:'jesus07antonio03@gmail.com', 
        pass:'Jba48oY3@1' 
    }
});

var datosParaEnviar={
    from:'jesus07antonio03@gmail.com', 
    to: 'antoniomg.ti20@utsjr.edu.mx',
    subject: 'Correo enviado desde LA MICRO.COM',  
    // TEXTO DEL MENSAJE 
    html: mensaje 
}

// ENVIAR CORREO
transporter.sendMail(datosParaEnviar, (err, data)=>{ 
    if(err){
        res.status(400).send("Error al enviar el correo "+err); 
    }
    else{
        res.redirect('/callcenter')
    }
});
});

// RUTA HELP 
ruta.get('/help',(req,res)=>{

    if(!req.session.usuario){
        res.redirect('/404Error')
    }else{
        res.render('help')
    }
});

//RUTA POST HELP
ruta.post('/help',(req,res)=>{
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0" 
    const mensaje=`
    <h1>Mensaje de LA MICRO.COM</h1>
    <h3>Nombre: ${req.body.nameHelp}</<h3>
    <h3>Correo: ${req.body.emailHelp}</<h3>
    <h3>Mensaje: ${req.body.messageHelp}</<h3>
` 
var transporter=nodemailer.createTransport({ 
    service:'gmail', 
    auth:{ 
        user:'jesus07antonio03@gmail.com', 
        pass:'Jba48oY3@1' 
    }
});

var datosParaEnviar={
    from:'jesus07antonio03@gmail.com', 
    to: 'antoniomg.ti20@utsjr.edu.mx',
    subject: 'Correo enviado desde LA MICRO.COM',  
    html: mensaje
}

// ENVIAR CORREO
transporter.sendMail(datosParaEnviar, (err, data)=>{
    if(err){
        res.status(400).send("Error al enviar el correo "+err);
    }
    else{
        res.redirect('/help')
    }
});
});

//RUTA POLICIES 
ruta.get('/policies',(req,res)=>{
    if(!req.session.usuario){
        res.redirect('/404Error')
    }else{
    res.render('policies');
    }
});

// RUTA POST LOGIN
ruta.post('/login',primerDato,(req,res)=>{
    Usuario.findAll({
        where:{
            email:req.body.emailLogin,
            password:req.body.passwordLogin,
            status:true
        }
    })
    .then((usu)=>{
        if(usu==""){
            res.redirect('/logout');
        }
        else{
            if(usu[0].type=="admin"){
            req.session.usuario=usu[0].email;
            res.redirect('/gps'); 
            }
            else if(usu[0].type=="user"){
                req.session.usuario=usu[0].email;
                res.redirect('/gpsUser')
            }
        }
    })
    .catch((err)=>{
        res.status(400).send("Error "+err);
    });
    var datos={
        email:req.body.emailLogin,
            password:req.body.passwordLogin,
    }
    console.log(datos);
});

//RUTA BUSCAR USER
ruta.post('/buscar',(req,res)=>{
    Usuario.findAll({where:{name:req.body.buscar}})
    .then((usu)=>{
        res.render('users',{users:usu});
    })
    .catch((err)=>{
        res.status(400).send("Error al recuperar al usuario.")
    })
});


//RUTA BUSCAR USER 1
ruta.post('/buscar1',(req,res)=>{
    Usuario.findAll({where:{name:req.body.buscar}})
    .then((usu)=>{
        res.render('deleteusers',{users:usu});
    })
    .catch((err)=>{
        res.status(400).send("Error al recuperar al usuario.")
    })
});

//ACCESO
ruta.get('/404Error',(req,res)=>{
    res.render('acceso');
});

/*AQUI
ruta.use((req,res,next)=>{

    Usuario.findAll({where:{status:true}})
    .then(()=>{
        console.log(name:req.body.name)
    })
})*/



//GPS USERS
ruta.get('/gpsUser',(req,res)=>{
    if(!req.session.usuario){
        res.redirect('/404Error')
    }else{
    res.render('gpsUser');
    }
});

//POLICIES USERS
ruta.get('/policiesUser',(req,res)=>{
    if(!req.session.usuario){
        res.redirect('/404Error')
    }else{
    res.render('policiesUser');
    }
});

// HISTORIAL USERS
ruta.get('/viajesUser',(req,res)=>{
    if(!req.session.usuario){
        res.redirect('/404Error')
    }else{
    res.render('historialUser');
    }
});

// HELP USER
ruta.get('/helpUser',(req,res)=>{
    if(!req.session.usuario){
        res.redirect('/404Error')
    }else{
    res.render('helpUser');
    }
});

//RUTA POST HELP USER
ruta.post('/helpUser',(req,res)=>{
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0" 
    const mensaje=`
    <h1>Mensaje de LA MICRO.COM</h1>
    <h3>Nombre: ${req.body.nameHelp}</<h3>
    <h3>Correo: ${req.body.emailHelp}</<h3>
    <h3>Mensaje: ${req.body.messageHelp}</<h3>
` 
var transporter=nodemailer.createTransport({ 
    service:'gmail', 
    auth:{ 
        user:'jesus07antonio03@gmail.com', 
        pass:'Jba48oY3@1' 
    }
});

var datosParaEnviar={
    from:'jesus07antonio03@gmail.com', 
    to: 'antoniomg.ti20@utsjr.edu.mx',
    subject: 'Correo enviado desde LA MICRO.COM',  
    html: mensaje
}

// ENVIAR CORREO
transporter.sendMail(datosParaEnviar, (err, data)=>{
    if(err){
        res.status(400).send("Error al enviar el correo "+err);
    }
    else{
        res.redirect('/helpUser')
    }
});
});

//RUTA'S EXPORT
module.exports=ruta;