import { DataTypes } from "sequelize";
import {sequelize} from '../database/database.js'
import {Producto} from './Producto.js'
export const Unidad_Productiva= sequelize.define('Unidades_Productivas', {
    id_up:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    Nombre:{
        type:DataTypes.STRING(50)   
    }
}
,
{timestamps:false}
);
// se relacionan las tablas 
Unidad_Productiva.hasMany(Producto,{
    foreignKey:'up',
    sourceKey:'id_up'
});
Producto.belongsTo(Unidad_Productiva,{
    sourceKey:'id_up',
    foreignKey:'up' 
});