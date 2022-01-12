module.exports = (sequelize,Sequelize)=>{
    return sequelize.define('tasks',{
        title: {
            type: Sequelize.STRING
        },
        description:{
            type: Sequelize.STRING
        },
        completed:{
            type: Sequelize.BOOLEAN
        }
    })    
}