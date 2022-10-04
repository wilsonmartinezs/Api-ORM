
import express from 'express'; 

import  rutaUsuario from './routes/routeUsuario.js'
import  rutaProducto from './routes/routeProducto.js'

import body_parser from 'body-parser';

const app= express();

app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended:false}));

app.use(rutaUsuario);
app.use(rutaProducto);


export default app;
