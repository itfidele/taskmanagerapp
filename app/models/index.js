const dbConfig=require('../config/db.config')
const Sequelize=require('sequelize')

const sequelize=new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD,{
    HOST:dbConfig.HOST,
    dialect:dbConfig.dialect,
    operatorsAliases:false,
    pool:dbConfig.pool,
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.tasks=require('../models/task.model')(sequelize,Sequelize)


module.exports = db