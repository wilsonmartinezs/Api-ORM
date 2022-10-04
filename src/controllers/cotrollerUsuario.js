
import {Usuario} from '../models/Usuario.js'
import { QueryTypes } from "sequelize";
import {sequelize} from '../database/database.js'
import { response } from 'express';



export const actualizarUsuario=async(req,res)=>{
try{
    const ident = req.params.ident;
    const {Nombre,Direccion,Telefono,Tipo_Usuario}= req.body;
   await Usuario.update({
        Nombre:Nombre,
        Direccion:Direccion,
        Telefono:Telefono,
        Tipo_Usuario:Tipo_Usuario
        },
        {
            where:{pk_identificacion:ident}
        });
        return res.json({message:"El usuario se actualizo con éxito"});
    }catch(error){
        return res.json({message:"Error al actualizar el usuario " + error.message});
    }
}



  export const eliminarUsuario =async (req,res) =>{
    try{
        const id_user= req.params.id_user;
        await Usuario.destroy(
            {
                where:{pk_identificacion :id_user}
            }
        );
        return  res.json({message:"Usuario eliminado con éxito en la bd"});
    }catch(error){
        return res.json({message:"Error al eliminar en la bd "+error});
    }
}




export const crearUsuario =async(req,res)=>{
    try{
        const {pk_identificacion,Nombre,Direccion,Telefono,Tipo_Usuario}=req.body;
        const newUser= await Usuario.create({
            pk_identificacion,
            Nombre,
            Direccion,
            Telefono,
            Tipo_Usuario
        });
        return res.json(newUser);
    }catch(error){
        return res.json({message:"Error al insertar en la bd "+error});
    }
    
}



    export const listarUsuarios =async(req,res)=>{
        try{
            const usuarios= await Usuario.findAll();
            return  res.json(usuarios);
        }catch(error)
            {
            return res.json({message:"Error al consultar en la bd "+error});
            } 
        }

export const BuscarUsuario=async(req,res)=>{
    try{
        
     let idUser= req.params.idUser;
     
     let busquedaUser=await  Usuario.findAll(
            {
               where:{pk_identificacion:idUser }
            }
        );
    return res.json(busquedaUser);

    }catch(error)
        {
        return res.json({message:"Error al consultar en la bd "+error});
        } 

}









         /*       
                export const listarUsuariosQuery =async(req,res)=>{
                    try{

                       
                       const users = await sequelize.query("SELECT * FROM usuarios", { type: QueryTypes.SELECT });
                      
                        return  res.json(users);
                    }catch(error){
                        return res.json({message:"Error al consultar en la bd "+error});
                    }
                       
                    }
*/




