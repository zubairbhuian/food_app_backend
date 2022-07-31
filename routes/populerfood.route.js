const express= require('express')

const router=express.Router()

router.route('/api/food/populer',(req,res)=>{
    res.sendFile(__dirname+'/./jsons/populer_food.json')
})



module.exports=router