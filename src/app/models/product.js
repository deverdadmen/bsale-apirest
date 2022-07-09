const DataType = require('sequelize')
const sequelize = require('../../config/database');

const Product = sequelize.define('product', {
    id:{
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataType.STRING
    },
    url_image:{
        type: DataType.STRING
    },
    price:{
        type: DataType.FLOAT
    },
    discount:{
        type: DataType.INTEGER
    },
    category:{
        type: DataType.INTEGER
    }
},{
    timestamps: false
})




module.exports = Product;

