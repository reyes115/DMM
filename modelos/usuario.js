//REQUEST FROM SEQUELIZE 
const Sequelize=require('sequelize');

//EXPORT
module.exports=(conexion)=>{
    const UsuariosShema=conexion.define(
        'usuario',{
            id:{
                type:Sequelize.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            name:{
                type:Sequelize.STRING
            },
            lastName:{
                type:Sequelize.STRING
            },
            email:{
                type:Sequelize.STRING
            },
            password:{
                type:Sequelize.STRING
            },
            type:{
                type:Sequelize.STRING
            }, 
            status:{
                type:Sequelize.BOOLEAN
            }
        }
    );
    return UsuariosShema;
}