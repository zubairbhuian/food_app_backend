const express= require('express')
const cors=require('cors')
const userRouter=require('./routes/user.route')
const populerfoodRouter=require('./routes/populerfood.route')

const app =express()

app.use(cors())
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/api/users",userRouter)


// api/users:GET
// api/users/:id:GET
// api/users:POST
// api/users:PATCH
// api/users:DELETE

app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/./views/index.html')
})
app.get('/api/food/populer',(req,res)=>{
  res.sendFile(__dirname+'/./jsons/populer_food.json')
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
