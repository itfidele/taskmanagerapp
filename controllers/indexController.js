const express=require('express')
const db=require('../models')
const index = (req,res)=>{
    res.render('index')
}

module.exports = index