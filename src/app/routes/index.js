const express = require('express');
const router = express.Router()
const fs = require('fs')

const pathRouter = `${__dirname}`

function removeExtension(fileName) {
    return fileName.split('.').shift();
}

fs.readdirSync(pathRouter).filter((file) =>{
    const fileWithoutExt = removeExtension(file);
    const skip = ['index'].includes(fileWithoutExt)
    if(!skip){
        router.use(`/${fileWithoutExt}`, require(`./${fileWithoutExt}`)) //todo: localhost/products etc
        //console.log("cargar ruta ---->", fileWithoutExt) //todo: Borrar linea
    }
})

router.get('*',(req, res) => {
    res.status(404);
    res.send({error: 'Not Found'});
})

module.exports = router;