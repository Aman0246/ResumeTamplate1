const express=require('express')
const app=express()
require('dotenv').config()
const cors =require('cors')
const tamplateOne =require('./routes')
const mongoose = require('mongoose');1
mongoose.connect('mongodb+srv://amankashyap:EcBHGzVKIVJRo1Mp@cluster0.jdvtfyy.mongodb.net/ResumeT1').then(()=>console.log("mongoose is connected...."))
.catch((e)=>{console.log("mongose is not connected")})
app.use(cors())
app.use(express.json())
app.use('/',tamplateOne)
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})