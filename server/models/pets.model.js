const mongoose = require("mongoose");


const PetSchema = new mongoose.Schema({
    //_id is automaticlly created for each 
    name:{
        type: String,
        required: [true, "Name of Pet is required"],
        minlength: [3,"Name of Pet must be at least 3 characters long"]
    },
    type:{
        type: String,
        required: [true, "Type of Pet is required"],
        minlength: [3,"Type of Pet must be at least 3 characters long"]
    },
    description:{
        type: String,
        required: [true, "Description of Pet is required"],
        minlength: [3,"Description of Pet must be at least 3 characters long"]
    },
    skill1: {type: String},
    skill2: {type: String},
    skill3: {type: String}
}, {timestamps: true}
)

//give access to mongoDB
const Pet = mongoose.model('Pet', PetSchema );

module.exports = Pet;