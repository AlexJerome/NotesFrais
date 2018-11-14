// Accessing the Service that we just created

var NoteFraisService = require('../services/notes.service')

// Saving the context of this module inside the _the variable
//COUCOU
_this = this


// Async Controller function to get the To do List

exports.getNoteFrais = async function(req, res, next){

    // Check the existence of the query parameters, If the exists doesn't exists assign a default value
    
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10; 

    try{
    
        var notesfrais = await NoteFraisService.getNoteFrais({}, page, limit)
        
        // Return the todos list with the appropriate HTTP Status Code and Message.
        
        return res.status(200).json({status: 200, data: notesfrais, message: "Succesfully NotesFrais Received"});
        
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
}

exports.getNoteFraisById = async function(req,res,next){

    // Check the existence of the query parameters, If the exists doesn't exists assign a default value
    
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10; 
    var id = req.params.id;

    try{
        var notesfrais = await NoteFraisService.getNoteFraisById(id)
        
        // Return the todos list with the appropriate HTTP Status Code and Message.
        
        return res.status(200).json({status: 200, data: notesfrais, message: "Note de frais bien recue !"});
        
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
}

exports.createNoteFrais = async function(req, res, next){

    // Req.Body contains the form submit values.

    var notefrais = {
        nom: req.body.nom,
        datenote: req.body.datenote,
        montant: req.body.montant,
        devise: req.body.devise,
        commentaire : req.body.commentaire,
        statut: req.body.statut
    }

    try{
        
        // Calling the Service function with the new object from the Request Body
    
        var createdNoteFrais = await NoteFraisService.createNoteFrais(notefrais)
        return res.status(201).json({status: 201, data: createdNoteFrais, message: "Succesfully Created NoteFrais"})
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: e.message})
    }
}
/*
exports.updateTodo = async function(req, res, next){

    // Id is necessary for the update

    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var id = req.body._id;

    console.log(req.body)

    var todo = {
        id,
        title: req.body.title ? req.body.title : null,
        description: req.body.description ? req.body.description : null,
        status: req.body.status ? req.body.status : null
    }

    try{
        var updatedTodo = await TodoService.updateTodo(todo)
        return res.status(200).json({status: 200, data: updatedTodo, message: "Succesfully Updated Tod"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}
*/

exports.removeNoteFrais = async function(req, res, next){

    var id = req.params.id;

    try{
        var deleted = await NoteFraisService.deleteNoteFrais(id)
        console.log("bien appelé")
        return res.status(200).json({status:200,data: deleted, message: "Successfully NoteFrais Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}