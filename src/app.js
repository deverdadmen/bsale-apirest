const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config/cors');
const path = require('path');
const sequelize = require('./config/database.js')
const app = express();

//swagger
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec = {
    definition:{
        swagger: "2.0",
        openapi: '1.0.0',
        info:{
            title: 'Bsale API Documentation',
            version: '1.0.0',
        },
        servers:[{
            url:''
        }]
    },
    apis:[`${path.join(__dirname,'../app/routes/*.js')}`],
}
//Configuraciones
app.set('port', process.env.PORT || 3000);
//app.set('json spaces', 2)

//Middleware
app.use(morgan('dev'));
app.use(cors(config.application.cors.server))
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/api',require('./app/routes'))  //Routes 
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)))

//Iniciando el servidor, escuchando...
async function main() {
    try {
        await sequelize.authenticate();
        console.log('Conexion establecida correctamente');
        app.listen(app.get('port'),()=>{
            console.log(`Server listening on port ${app.get('port')}`);
        });
    } catch (error) {
        console.error('No se pudo conectar a la base de datos', error);
    }
}

main()


