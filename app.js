const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.json('Hello world !');
});


app.get('/developer', (req, res)=>{
    res.json('Mantu Kumar Keshri')
})

module.exports = app;