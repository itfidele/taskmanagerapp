const express=require('express')
const cors=require('cors')

const app=express()

const corsOptions={
    'origin':'http://127.0.0.1:3000'
}
app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
    res.json({ message:'Welcome back'})
})

const port=process.env.PORT || 3000

const db=require('./app/models')
db.sequelize.sync()

app.listen(port,()=>{
    console.log("server is starting on port",port)
})