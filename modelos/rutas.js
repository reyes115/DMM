//REQUEST FROM SEQUELIZE 
const Sequelize=require('sequelize');

//EXPORT
module.exports=(conexion)=>{
    const UsuariosShema=conexion.define(
        'rutas',{
            id:{
                type:Sequelize.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            ruta:{
                type:Sequelize.STRING
            },
            inicio:{
                type:Sequelize.STRING
            },
            fin:{
                type:Sequelize.STRING
            },
            hrInicio:{
                type:Sequelize.STRING
            },
            hrFin:{
                type:Sequelize.STRING
            },
            status:{
                type:Sequelize.BOOLEAN
            }
        }
    );
    return UsuariosShema;
}