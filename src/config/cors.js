const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "*", //Servidor que decia consumir (https://bsaleapiback.herokuapp.com) o (*) en este caso para que sea libre
                    credentials: true
                }
            ]
        }
    }
}

module.exports = config;