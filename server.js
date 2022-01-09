const express=require('express')
const cors=require('cors')
const path=require('path')
const taskRouter = require("./routes/taskRoutes")
const indexRouter=require("./routes/indexRouter")
const loginRouter =require('./routes/loginRouter')
const dashboardRouter =require('./routes/dashboardRouter')
const app=express()


app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'hbs')

const corsOptions={
    'origin':'http://127.0.0.1:3000'
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


app.use('/',indexRouter)
app.use('/login',loginRouter)
app.use('/tasks',taskRouter)
app.use('/dashboard',dashboardRouter)

const port=process.env.PORT || 3000

//const db=require('./app/models')
//db.sequelize.sync()

app.listen(port,()=>{
    console.log("server is starting on port",port)
})