const DataType = require('sequelize')
const sequelize = require('../../config/database');
const Product = require('../../config/product');
const Category = sequelize.define('category', {
    id:{
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataType.STRING
    }
},{
    timestamps: false
})

category.hasMany(Product,{
    foreignKey: { name: 'category' },
    as: 'idCategory',
})
Product.belongsTo(Category, {
    foreignKey: 'id',
    target_Key: { name: 'category' },
    as: 'idCategory'
})

module.exports = Category;
