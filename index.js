const express = require('express');
const app = require('./app')
const port = 3000;

app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`);
})