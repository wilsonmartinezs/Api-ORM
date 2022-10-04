import {Producto} from '../models/Producto.js'
import {Unidad_Productiva} from '../models/Unidad_Productiva.js'



export const listarProductos=async(req,res) => {
    try{
    let listaProducto=await Producto.findAll({
                            attributes:['id_producto','Nombre','Valor','Nombre'],
                            include:[
                                {
                                    model:Unidad_Productiva
                                }
                            ]
                        }
        );
        res.json(listaProducto);
    }catch(e){
        res.json({mensaje:'Error la consultar la bd '+e})
    }





};



