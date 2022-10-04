import {DataTypes} from "sequelize";
import {sequelize} from '../database/database.js'
import {Compra} from './Compra.js'
export const Usuario=sequelize.define('Usuarios',
    {
        pk_identificacion:{
            type: DataTypes.BIGINT,
            primaryKey:true
        } ,
        Nombre:{
            type: DataTypes.STRING(50)
        },
        Direccion:{
            type: DataTypes.STRING(50)
        },
        Telefono:{
            type: DataTypes.STRING(15)
        },
        Tipo_Usuario:{
            type: DataTypes.ENUM(),
            values: ['Instructor', 'Aprendiz', 'Administrador']
        }
    }
    ,
    {timestamps:false}  
  );


Usuario.hasMany(Compra,{
    foreignKey:'usuario', 
    sourceKey:'pk_identificacion'   
});
Compra.belongsTo(Usuario,{
    foreignKey:'usuario' ,
    sourceKey:'pk_identificacion'
    
});
