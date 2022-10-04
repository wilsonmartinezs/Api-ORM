import {Router} from 'express'; 
import {crearUsuario,
        listarUsuarios,
        eliminarUsuario,
       actualizarUsuario,
       BuscarUsuario
        //listarUsuariosQuery
} from '../controllers/cotrollerUsuario.js'
const routeUsuario=Router();
routeUsuario.post('/crearUsuario',crearUsuario);
routeUsuario.get('/listarUsuarios',listarUsuarios);

routeUsuario.delete('/eliminarUsuario/:id_user',eliminarUsuario);

routeUsuario.put('/actualizarUsuario/:ident',actualizarUsuario);
routeUsuario.get('/BuscarUsuario/:idUser',BuscarUsuario);


///routeUsuario.get('/listarUsuariosQuery',listarUsuariosQuery);
export default routeUsuario;


