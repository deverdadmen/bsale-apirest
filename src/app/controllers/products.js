
const { request } = require('express');
const { httpError } = require('../helpers/handleError');
const Project = require('../models/product')

const getProducts = async (req, res) => {

    const products = await Project.findAll()

    res.send(products);

    // let lista
    // conexion.getConnection(function(err, connection) {
    //     if (err) throw err;
    //     connection.query('SELECT product.name AS name, product.url_image AS url_image, product.price AS price, product.discount AS discount FROM product', function (error, results, fields) {
    //         lista = results
    //         res.send(lista)
    //         connection.release();        
    //         if (error) throw error;
    //     });
    // });
 
}

const getFindProducts = (req, res) => {
    // const find = req.params.name
  
    // conexion.getConnection(function(err, connection) {
    //     if (err) throw err;
    //     connection.query(`SELECT product.name AS name, product.url_image AS url_image, product.price AS price, product.discount AS discount FROM product WHERE product.name LIKE '%${find}%'`, function (error, results, fields) {
    //         lista = results
    //         res.send(lista)
    //         connection.release();        
    //         if (error) throw error;
    //     });
    // });

}

const getProductsByCategory = (req, res) => {
    // const category = req.params.category
    // conexion.getConnection(function(err, connection) {
    //     if (err) throw err;
    //     connection.query(`SELECT product.name AS name, product.url_image AS url_image, product.price AS price, product.discount AS discount FROM product INNER JOIN category ON product.category=category.id WHERE category.name = '${category}'`, function (error, results, fields) {
    //         lista = results
    //         res.send(lista)
    //         connection.release();        
    //         if (error) throw error;
    //     });
    // });

}




module.exports = { getProducts, getFindProducts, getProductsByCategory }