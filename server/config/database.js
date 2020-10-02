const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');

module.exports = new Sequelize('agenciadeviajes','root','',{
    host:'localhost',
    port:'3307',
    dialect: 'mysql',
    define:{
        timestamps:false
    },
    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: 0
})