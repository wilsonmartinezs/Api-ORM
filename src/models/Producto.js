import { DataTypes } from "sequelize";
import {sequelize} from '../database/database.js';
import {Compra} from './Compra.js'
export const Producto= sequelize.define('Productos', {
    id_producto:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    Nombre:{
        type:DataTypes.STRING(50)   
    },
    Descripcion:{
        type:DataTypes.STRING(100)   
    },
    Valor:{
        type:DataTypes.DECIMAL(10,2)
    },
    Stock:{
        type:DataTypes.INTEGER
    }
},
{timestamps:false}
);


Producto.hasMany(Compra,{
    foreignKey:'producto', 
    sourceKey:'id_producto'   
});
Compra.belongsTo(Producto,{
    sourceKey:'id_producto',
    foreignKey:'producto' 
});

