const express = require('express');
const mongoose = require('mongoose');
const app = require('./app')
const port = 3000;


// MongoDB connection
const db_url = "mongodb://localhost:27017/HelloWorld";

mongoose.connect(db_url)
    .then(()=>console.log('db connected successfully'))
    .catch(err=>console.log(err))

app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`);
})