const { Router } = require('express');
const router = Router();
const { 
    getProductsOrderLower, 
    getProductsOrderMajor, 
    getProductsOrderalphabetic 
} = require('../controllers/orderby');

router.get('/lower/:category', getProductsOrderLower)
router.get('/lower', getProductsOrderLower)
router.get('/major/:category', getProductsOrderMajor)
router.get('/major', getProductsOrderMajor)
router.get('/alphabetic/:category', getProductsOrderalphabetic)
router.get('/alphabetic', getProductsOrderalphabetic)

module.exports = router