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


const user = mongoose.model('users', DeveloperSchema);
module.exports = user;
