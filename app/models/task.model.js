module.exports = (sequelize,Sequelize)=>{
    const Task = sequelize.define('tasks',{
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

    return Task;
}