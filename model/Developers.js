// const mongoose = require('mongoose');
// const {Schema, model} = mongoose;

// const DeveloperSchema = new Schema(
//     {
//         say : String,
//         developer : String,
//         greeting : String
//     }
// );

// const Developer = model("Developers",DeveloperSchema);
// module.exports = { Developer };

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeveloperSchema = new Schema(
    {
        say : String,
        developer : String,
        greeting : String
    }
);


const Developer = mongoose.model('Developers', DeveloperSchema);
module.exports = Developer;