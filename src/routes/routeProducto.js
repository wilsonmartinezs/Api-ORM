import {Router} from 'express'; 
import {
    listarProductos
} from '../controllers/controllerProducto.js'
const routeProductos=Router();


routeProductos.get('/listarProductos',listarProductos);



export default routeProductos;