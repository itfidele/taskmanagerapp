const express = require('express')
// index, redirect

exports.login = (req,res)=>{
    res.render('login')
}


exports.register=(req,res)=>{
    res.render('register')
}