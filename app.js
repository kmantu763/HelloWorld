const express = require('express');
const app = express();


const DeveloperModel = require('./model/Developers');

app.use(express.json());


app.get('/', async (req, res)=>{
    let find = await DeveloperModel.find({});
    // console.log(find);
    res.json(find);
});

app.get('/developer', async (req, res)=>{
    let find = await DeveloperModel.aggregate().project({
        say : 0,
        _id : 0,
        __v : 0
    });
    // console.log(find);
    res.json(find);

})

app.get('/developer/:id', async (req, res)=>{
    let id = req.params.id;
    // console.log(id);
    let find = await DeveloperModel.findById(id);
    // console.log(find);
    res.json(find);
})


app.post('/CreateDevelopers/body', (req, res)=>{

    const developer = new DeveloperModel({
        say : req.body.say,
        developer : req.body.developer,
        greeting : req.body.greeting
    })
    developer.save();
    res.json(developer);
})

app.post('/CreateDevelopers', (req, res)=>{

    const developer = new DeveloperModel(
        {
            say :"Thank you ",
            developer : "mantu saw",
            greeting : "Ok Successfull"
        }
    )
    developer.save();
    res.json(developer);
    
})



module.exports = app;