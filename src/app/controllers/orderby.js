const { request } = require('express');
const { httpError } = require('../helpers/handleError');
const { Op } = require('sequelize');
const Product = require('../models/product');
const Category = require('../models/category');

const getProductsOrderLower = async (req, res) => {
    const category = req.params.category
    try { 
        if(category === undefined){
            const products = await Product.findAll({
                order: [
                    ['price', 'ASC']
                ]
            });
            res.json(products);
        }else{
            const products = await Product.findAll({
                include: {
                    model: Category,
                    as: 'categoria',
                    required: true,
                    where: {   
                        '$categoria.name$':{
                            [Op.eq]:category
                        }
                    },   
                },
                order: [
                    ['price', 'ASC']
                ]
                
            });
            res.json(products);
        }
        
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
}
const getProductsOrderMajor = async (req, res) => {
    const category = req.params.category
    try { 
        if(category === undefined){
            const products = await Product.findAll({
                order: [
                    ['price', 'DESC']
                ]
            });
            res.json(products);
        }else{
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
                },
                order: [
                    ['price', 'DESC']
                ]
                
            });
            res.json(products);
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
}

const getProductsOrderalphabetic = async (req, res) => {
    const category = req.params.category

    try { 
        if(category === undefined){
            const products = await Product.findAll({
                order: [
                    ['name', 'ASC']
                ]
            });
            res.json(products);
        }else{
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
                },
                order: [
                    ['name', 'ASC']
                ]
                
            });
            res.json(products);
        } 
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
}

module.exports = { getProductsOrderLower, getProductsOrderMajor, getProductsOrderalphabetic }