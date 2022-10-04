import app from './app.js';
import  {sequelize} from './database/database.js'
import '../src/models/Usuario.js'
import '../src/models/Producto.js'
import '../src/models/Unidad_Productiva.js'
import '../src/models/Compra.js'
const port= process.env.PORT || 3000;
async function main (){      
    try {
        //await sequelize.authenticate();
        sequelize.sync({ force: false });
        app.listen(port);
        console.log(`Servidor ejecutando en el puerto ${port}`);
        } catch (error) {
            console.error('No se conecto con la base de datos:', error);
        }
    }
main();