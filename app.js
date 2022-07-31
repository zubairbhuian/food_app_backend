const express= require('express')
const cors=require('cors')
const userRouter=require('./routes/user.route')

const app =express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/api/users",userRouter)

// api/users:GET
// api/users/:id:GET
// api/users:POST
// api/users:PATCH
// api/users:DELETE

app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/./janina.json')
})
//  route not found
app.use((req,res,next)=>{
    res.status(404).json({
     message:'rout not found'
    })
  })
//  Server err
  app.use((err,req,res,next)=>{
    res.status(500).json({
     message:'Some thing broke'
    })
  })
  

module.exports=app;