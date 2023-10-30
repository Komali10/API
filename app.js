const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1/user'

const app = express()

mongoose.connect(url,{useNewUrlParser:true})

const con = mongoose.connection
 con.on('open',function(){
    console.log('connected....')
 })

 app.use(express.json())

const alienRouter = require('./routers/user')
app.use('/user',alienRouter)

 app.listen(9000,function(){
    console.log('Server started')
 })
 