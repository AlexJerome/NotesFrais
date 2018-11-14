var express = require('express')

var router = express.Router()

// Getting the NoteFrais Controller that we just created

var NoteFraisController = require('../../controllers/notes.controller');


// Map each API to the Controller FUnctions



router.get('/', NoteFraisController.getNoteFrais)
router.get('/:id', NoteFraisController.getNoteFraisById)

router.post('/', NoteFraisController.createNoteFrais)

//router.put('/', ToDoController.updateTodo)

router.delete('/:id',NoteFraisController.removeNoteFrais)


// Export the Router

module.exports = router;