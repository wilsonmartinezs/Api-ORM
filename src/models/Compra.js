import {DataTypes} from "sequelize";
import {sequelize} from '../database/database.js'
export const Compra= sequelize.define('compras', {
    id_compra:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    fecha:{
        type:DataTypes.DATE
    },
    cantidad:{
        type:DataTypes.INTEGER
    }
},
{timestamps:false}
);


