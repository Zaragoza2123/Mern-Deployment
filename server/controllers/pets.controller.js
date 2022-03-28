const Pet = require('../models/Pets.model');

module.exports.helloWorld = (req,res)=>{
    res.json({msg:"hello world"})
}
module.exports.getAllPets = (req, res)=>{
    Pet.find()
        .then(allPets=>{
            res.json({results: allPets})
        })
        .catch(err => res.json({message: "something went wrong", error: err}));
        
}

module.exports.createPet = (req, res) =>{
    Pet.create(
        req.body
        )
        .then(newPet=>{
            res.json({results: newPet})
        })
        .catch(err => res.json({message: "something went wrong", error: err}));
}
module.exports.getOnePet = (req, res) => {
    Pet.findOne({_id: req.params._id})
    .then(onePet=>{
        res.json({results: onePet})
    })
    .catch(err => res.json({message: "something went wrong", error: err}));
}

module.exports.updateOnePet = (req,res) => {
    Pet.findOneAndUpdate(
        {_id: req.params._id},
        req.body,
        { new: true, runValidators: true }
    )
    .then(updatedPet=>{
        res.json({results: updatedPet})
    })
    .catch(err => res.json({message: "something went wrong", error: err}));
}

module.exports.deleteOnePet = (req,res) => {
    Pet.findOneAndDelete(
        {_id: req.params._id}
    )
    .then(deleteOnePet=>{
        res.json({results: deleteOnePet})
    })
    .catch(err => res.json({message: "something went wrong", error: err}));
}
