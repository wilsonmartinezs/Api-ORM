import Sequelize from "sequelize";

export const sequelize = new Sequelize(
        'sena_empresa2', 
        'root', 
        '', {
        host: 'localhost',
    
        dialect: 'mysql'
      });