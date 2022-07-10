
const { request } = require('express');
const { httpError } = require('../helpers/handleError');
const { Op } = require('sequelize');
const sequelize = require('../../config/database');
const Product = require('../models/product');
const Category = require('../models/category');

const getProducts = async (req, res) => {

    try { 
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
}

const getFindProducts = async (req, res) => {
    const find = req.params.name
  
    const products = await Product.findAll({
        where: {   
            name:{
                [Op.substring]:find
            }
        }
    })
    res.send(products);


}

const getProductsByCategory = async (req, res) => {
    const category = req.params.category

    const products = await Product.findAll({
        include: {
            model: Category,
            as: 'categoria',
            required: true,
            where: {   
                '$categoria.name$':{
                    [Op.eq]:category
                }
            }
        }
    })

    res.send(products)

}




module.exports = { getProducts, getFindProducts, getProductsByCategory }