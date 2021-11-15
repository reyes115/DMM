//REQUEST FROM EXPRESS 
const express=require('express');
//REQUEST FROM RUTA
const ruta=express.Router();
const {Ruta}=require('../conexion');
//RUTA LOGIN
ruta.get('/',(req,res)=>{
    if(!req.session.usuario){
        res.redirect('/404Error')
    }else{
    res.render('ruta')
    }
});

ruta.post('/newruta',(req,res)=>{
    Ruta.create(req.body)
    .then(()=>{
        res.redirect("/ruta/busses");
    })
    .catch((err)=>{
        console.log("Error al insertar la ruta "+err);        
    })
});

// RUTA BUSSES 
ruta.get('/busses',(req,res)=>{
    if(!req.session.usuario){
        res.redirect('/404Error')
    }else{
    Ruta.findAll({where:{status:true}})
    .then((ruta)=>{
        res.render('busses',{ruta:ruta});
    })
    .catch((err)=>{
        res.status(400).send("Error en la extracción "+err)
    });
}
});

//RUTA OFF 
ruta.get('/OffId/:id',(req,res)=>{
    Ruta.destroy({where:{id:req.params.id}})
.then(()=>{
    res.redirect('/ruta/busses');
})
.catch((err)=>{
    res.status(400).send("Error al eliminar registro "+err);
});
});


//RUTA SEARCH BUSCAR 2 
ruta.post('/buscar2',(req,res)=>{
    Ruta.findAll({where:{inicio:req.body.buscar}})
    .then((ruta)=>{
        res.render('busses',{ruta:ruta});
    })
    .catch((err)=>{
        res.status(400).send("Error al recuperar al usuario.")
    })
});

//RUTA SEARH BUSCAR 3
ruta.post('/buscar3',(req,res)=>{
    Ruta.findAll({where:{fin:req.body.buscar}})
    .then((ruta)=>{
        res.render('busses',{ruta:ruta});
    })
    .catch((err)=>{
        res.status(400).send("Error al recuperar al usuario.")
    })
});

// RUTA MODIFICAR RUTA 
ruta.get('/modId/:id',(req,res)=>{
    if(!req.session.usuario){
        res.redirect('/404Error')
    }else{
    Ruta.findAll({
        where:{
            id:req.params.id
        }
    })
    .then((ruta)=>{
        res.render('modRuta',{ruta:ruta})
    })
    .catch((err)=>{
        res.status(400).send("Error al recuperar informacion "+err);
    });
}
});

// RUTA POST MODIFICAR RUTA
ruta.post('/modRuta',(req,res)=>{
    const datos={
        ruta:req.body.rutaNew,
        inicio:req.body.inicioNew,
        fin:req.body.finNew,
        hrInicio:req.body.hrInicioNew,
        hrFin:req.body.hrFinNew
    }
    Ruta.update(datos,{
        where:{
            id:req.body.idNew
        }
    })
    .then(()=>{
        res.redirect('/ruta/busses');
    })
    .catch((err)=>{
        res.status(400).send("Error al modificar el usuario "+err);
    });
});

// RUTA BUSSES USERS 
ruta.get('/bussesUsers',(req,res)=>{
    if(!req.session.usuario){
        res.redirect('/404Error')
    }else{
       Ruta.findAll({where:{status:true}})
       .then((ruta)=>{
           res.render('bussesUsers',{ruta:ruta});
       })
       .catch((err)=>{
           res.status(400).send("Error en la extracción "+err)
       });
    }
   });

//RUTA SEARCH BUSCAR 4 
ruta.post('/buscar4',(req,res)=>{
    Ruta.findAll({where:{inicio:req.body.buscar}})
    .then((ruta)=>{
        res.render('bussesUsers',{ruta:ruta});
    })
    .catch((err)=>{
        res.status(400).send("Error al recuperar al usuario.")
    })
});

//RUTA SEARH BUSCAR 3
ruta.post('/buscar5',(req,res)=>{
    Ruta.findAll({where:{fin:req.body.buscar}})
    .then((ruta)=>{
        res.render('bussesUsers',{ruta:ruta});
    })
    .catch((err)=>{
        res.status(400).send("Error al recuperar al usuario.")
    })
});

//RUTA'S EXPORT
module.exports=ruta;