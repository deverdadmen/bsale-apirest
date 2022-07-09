const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const config = require('./config/cors');

const sequelize = require('./config/database.js')
const app = express();

//Configuraciones
app.set('port', process.env.PORT || 3000);
//app.set('json spaces', 2)

//Middleware
app.use(morgan('dev'));
app.use(cors(config.application.cors.server))
app.use(express.urlencoded({extended:false}));
app.use(express.json());

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

//Routes
app.use('/api',require('./app/routes'))
