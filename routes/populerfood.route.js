const express= require('express')

const router=express.Router()

router.route('/api/food/populer',(req,res)=>{
    res.sendFile(__dirname+'/./jsons/populer_food.json')
})
router.route('download/learnquran',(req,res)=>{
    res.download('./doc/anc.text')
})


module.exports=router