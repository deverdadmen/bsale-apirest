const DataType = require('sequelize')
const sequelize = require('../../config/database');
const Product = require('./product');

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


module.exports = Category;
