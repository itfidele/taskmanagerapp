const express=require('express')
const path = require('path')

const app=express()
const port = process.env.PORT || 3000
app.use(express.static(path.join(__dirname, '../public')))
app.set('view engine','hbs')

app.get("/",(req,res)=>{
    res.render('index')
})

app.get("/login", (req, res) => {
    res.render('login')
})

app.get("/register", (req, res) => {
    res.render('register')
})

app.post("/dashboard", (req, res) => {
    res.render('dashboard')
})


app.get('/reports',(req, res)=>{
    res.render('reports')
})
app.listen(port)

