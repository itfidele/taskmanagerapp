const express = require('express');
const db = require('../models')

exports.homepage = (req,res)=>{
    const context = {}
    const sql = "select * from tasks order by id desc"
    db.query(sql, (error, results) => {
        if (error)
            throw error
        context.tasks = results
        console.log(results)
        res.render('dashboard', context)
    })
}

exports.addtask =(req,res)=>{
    context = {}
    if(req.body.title){
        const task ={
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed
        }
        const sql="insert into tasks set ?"
        db.query(sql,task,(error,result)=>{
            if(error)
                throw error
            console.log(result)
            context.success = true
        })
        res.redirect('/dashboard')
    }    
    res.render('addtask',context)
}

exports.settings =(req,res)=>{
    
    res.render('settings')
}


