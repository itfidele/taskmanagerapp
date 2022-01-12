const db=require('../models')
const Task=db.Task
const Op=db.Sequelize.Op

exports.create =(req,res)=>{
    if(!req.body.title){
        res.status(400).send({message:"content can't be empty"})
    }

    const task={
        title:req.body.title,
        description: req.body.description,
        completed: req.body.completed
    }

    Task.create(task)
        .then((data)=>{
            return data
        })
        .catch((err)=>{
            res.status(500).send({message:err.message || "some error occured while creating task"})
        })
}

exports.findAll=(req,res)=>{
    const title=req.body.title;
    var condition = title ? { title: { [Op.like] : `%${title}%` }} : null

    Task.findAll({ where: condition })
        .then((data)=>{
            res.send(data)
        })
        .catch((err)=>{
            res.status(500).send({ message: err.message || "some error occured while retrieving tasks" })
        })

}

exports.findOne=(req,res)=>{
    
}

exports.update=(req,res)=>{

}

exports.delete=(req,req)=>{

}

exports.deleteAll=(req,res)=>{

}

exports.findAllCompleted=(req,res)=>{
    
}