const DataType = require('sequelize')
const sequelize = require('../../config/database');
const Category = require('./category');

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

Category.hasMany(Product,{
    foreignKey: 'id',
    constraints: false,
})
Product.belongsTo(Category, {
    foreignKey: 'category',
    as: 'categoria',
    constraints: false,
})


module.exports = Product;

