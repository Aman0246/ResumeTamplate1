const express=require('express')
const { UserData } = require('./models/userData')
const tamplateOne =express.Router()


tamplateOne.get('/',async(req,res)=>{
    console.log('hellow')
  let data =await UserData.findOne({email:'johndoe@example.com'})
  res.send({data:data})
})
  
module.exports = tamplateOne