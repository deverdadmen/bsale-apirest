const { Router } = require('express');
const router = Router();

const{getProducts, getFindProducts, getProductsByCategory} = require('../controllers/products')

router.get('/',getProducts)

router.get('/find/:name',getFindProducts)

router.get('/category/:category',getProductsByCategory)

module.exports = router