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
//paypal
const request=require('request')
// STATIC RUTE 
app.use('/public',express.static(path.join(__dirname,'public')));
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
app.use('/ruta',rutas);

///////////////////////////////
//PARA REALIZAR PAGOS EN PAYPAL
///////////////////////////////
 
//CLIENTE ID DE PAYPAL:AUyfG3Fojq9_waCNCoOx-atDhJF2QLHJcLK4Klu3lTLc3kIfIHO6u0jSEwC3tXm_c70gVbPEgrxsK5Wy
//CLAVE SECRETA DE PAYPAL:ELdGJVJdAN3uoKGUYGIPEVG-jAiXj1oc1vAteWdzHsR6pJ8xPTSyM_Xo1PhT0DexYO7YDGSB1VvxyKWr

const Client='AUyfG3Fojq9_waCNCoOx-atDhJF2QLHJcLK4Klu3lTLc3kIfIHO6u0jSEwC3tXm_c70gVbPEgrxsK5Wy';
const secret='ELdGJVJdAN3uoKGUYGIPEVG-jAiXj1oc1vAteWdzHsR6pJ8xPTSyM_Xo1PhT0DexYO7YDGSB1VvxyKWr';
//RUTAS DE PRUEBAS DE PAYPAL
const PayPalPrubas='https://api-m.sandbox.paypal.com';  //NOTA: EN PAYPALDEVELOPERS SE ENCONTRARA EN EL APARTADO DE APIS LAS SIGUIENTES RUTAS "Sandbox: https://api-m.sandbox.paypal.com" Y "Live: https://api-m.paypal.com" LA DE Sandbox ES PARA PRUEBAS Y LA DE Live ES PARA EL ENORNO REAL

const auth={
    user:Client,
    pass:secret
}

const createPayment=(req, res)=>{
    const body={
        intent:"CAPTURE",
        purchase_units:[{
            amount:{
                currency_code:'MXN', //NOTA:SE INDICA EL TIPPO DE MONEDA
                value:'50'//NOTA NOS INDICA EL PRECIO DEL SERVICIO
            }
        }],
        application_context:{
            brand_name:'LA MICRO.COM',//NOTA:INDICA EL NOMBRE DE LA EMPRESA
            landing_page:'NO_PREFERENCE',//NOTA:NOS INDICA EL FORMATO
            user_action:'PAY_NOW',
            return_url:'http://localhost:3000/executePayment',//NOTA:URL AL PAGAR CUNADO SE REALISARA LA COMPRA
            cancel_url:'http://localhost:3000/cancelPayment'//NOTA:URL AL CANCELAR LA COMPRA
        }
    }
    request.post(PayPalPrubas+'/v2/checkout/orders',{//NOTA:RUTA DE URL QUE ENTRARA A PAYPAL
        auth,
        body,
        json:true
    },(err,response)=>{
        //res.json(response.body.links[0].href);
        var link=response.body.links[1].href;  //NOTA: DESPUES DE INGRESAR EN LA PESTAÑA DE INICIO DE SECION DE PAYPAL ENTRAR A PAY PAL DEVELOPERS>ACCOUNTS>Sandbox Accounts>PERSONAL>...>VIEW/EDIT ACCOUNT Y COPIAR EL "Email ID" YTAMBIEN EL "System Generated Password" YA QUE DE ESTA MANERA PODEMOS INICIAR SECION EN PAYPAL COMO PRUEBA
        res.redirect(link);
    })
}

app.post('/PayPal',createPayment);//NOTA:EN LAS COMILLAS SIMPLES ESTARA LA RUTA DEL POST "/PayPal" QUE SE ENCUENTRA EN PayPal.ejs y el createPayment nos indica que se utilisaran la constante de los datos de pago de pay pal 

//PARA EL BOTON PAGAR AHORA DE PAYPAL
const executePayment=(req,res)=>{
    const token=req.query.token;
    request.post(PayPalPrubas+'/v2/checkout/orders'+token+'capture',{
        auth,
        body:{},
        json:true
    },(err,response)=>{
        res.redirect('/paypalMensaje');
    });
}

app.get('/executePayment',executePayment);

///////////////////////////////
//FIN PARA REALIZAR PAGOS EN PAYPAL
///////////////////////////////

//APP'S PORT
const port=process.env.PORT || 3000; //--> Estamos optiendo el puerto que nos estan mandando

app.listen(port,()=>{
	console.log('Servidor en el puerto '+port);
});


