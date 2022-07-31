const express= require('express')
const getAllUser = require('../controllers/use.controller')

const router=express.Router()




router.get('/',getAllUser)



module.exports=router