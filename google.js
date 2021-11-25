const express=require('express');
const path=require('path');
/*google:*/
const GoogleStrategy=require('passport-google-oauth20');

/*-------------------------------------------------------------------------------------*/
/*Id Cliente: 803716388072-u77mbo82e0rr3gvvj3vt6gta6ohrklf0.apps.googleusercontent.com */
/*Secreto del cliente: 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                             */
/* API: AIzaSyB6qQ5YjSM49Oe9pc8hWT52k1yOshTzCj0                                        */
/*-------------------------------------------------------------------------------------*/



/*google configuracion*/
passport.use(new GoogleStrategy({
    clientID:'803716388072-u77mbo82e0rr3gvvj3vt6gta6ohrklf0.apps.googleusercontent.com',
    clientSecret:'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',
    callbackURL:'http://localhost:3000/google/callback'
},
(accessToken,refreshToken,profile,cb)=>{
    var user={
        accessToken,
        refreshToken,
        profile
    }
    return cb(null, user);
}
));

//passports:
passport.serializeUser((user,done)=>{
    done(null,user);
})
passport.deserializeUser(()=>{
    done(null,user);
});