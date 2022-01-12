const express=require('express')
const cors=require('cors')
const hbs =require('express-hbs')
const path=require('path')
const indexRouter=require("./routes/indexRouter")
const authRouter =require('./routes/authRouter')
const dashboardRouter =require('./routes/dashboardRouter')
const app=express()


app.use(express.static(path.join(__dirname, 'public')))
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/inc'
}));
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views');

const corsOptions={
    'origin':'http://127.0.0.1:3000'
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


app.use('/',indexRouter)
app.use('/',authRouter)
app.use('/dashboard',dashboardRouter)

const port=process.env.PORT || 3000
const res = require('express/lib/response')


app.listen(port,()=>{
    console.log("server is starting on port",port)
})