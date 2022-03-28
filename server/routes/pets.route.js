const PetController = require('../controllers/pets.controller');


module.exports = (app) => {
    app.get('/api/hello', PetController.helloWorld);
    app.get('/api/pet', PetController.getAllPets);
    app.post('/api/pet', PetController.createPet);
    app.get('/api/pet/:_id', PetController.getOnePet);
    app.put('/api/pet/:_id', PetController.updateOnePet);
    app.delete('/api/pet/:_id', PetController.deleteOnePet);
}




