const { request } = require('express');
const { httpError } = require('../helpers/handleError');
const { Op } = require('sequelize');
const Product = require('../models/product');
const Category = require('../models/category');

const getCategories = async (req, res) => {
    try {
      const categories = await Category.findAll()
      res.send(categories);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  
}

module.exports = { getCategories }