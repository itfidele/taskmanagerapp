const express = require('express');

exports.homepage = (req,res)=>{
    res.render('dashboard')
}

exports.addtask =(req,res)=>{
    res.render('addtask')
}


