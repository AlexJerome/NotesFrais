// Gettign the Newly created Mongoose Model we just created 
var NoteFrais = require('../models/notes.model')

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the To do List
exports.getNoteFrais = async function(query, page, limit){

    // Options setup for the mongoose paginate

    var options = {
        page,
        limit
    }
    
    // Try Catch the awaited promise to handle the error 
    
    try {
        var notesfrais = await NoteFrais.find({})

        // Return the todod list that was returned by the mongoose promise

        return notesfrais;

    } catch (e) {

        // return a Error message describing the reason 

        throw Error(e.message)
    }
}

exports.getNoteFraisById = async function(id){
    
    // Try Catch the awaited promise to handle the error 
    
    try {
        var coucou = await NoteFrais.findById(id)
        // Return the recette list that was returned by the mongoose promise

        return coucou;

    } catch (e) {

        // return a Error message describing the reason 

        throw Error(e.message)
    }
}

exports.createNoteFrais = async function(notefrais){
    
    // Creating a new Mongoose Object by using the new keyword
    var newNoteFrais = new NoteFrais({
        nom: notefrais.nom,
        datenote: notefrais.datenote,
        date: new Date(),
        montant : notefrais.montant,
        commentaire : notefrais.commentaire,
        devise: notefrais.devise,
        statut: notefrais.statut
    })

    try{

        // Saving the Todo 
        var savedNoteFrais = await newNoteFrais.save()

        return savedNoteFrais;
    }catch(e){
      
        // return a Error message describing the reason     
        throw Error(e.message)
    }
}

/*
exports.updateTodo = async function(todo){
    var id = todo.id

    try{
        //Find the old Todo Object by the Id
    
        var oldTodo = await ToDo.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Todo")
    }

    // If no old Todo Object exists return false
    if(!oldNoteFrais){
        return false;
    }

    console.log(oldNoteFrais)

    //Edit the Todo Object
    oldNoteFrais.nom = notefrais.nom
    oldTodo.status = todo.status


    console.log(oldTodo)

    try{
        var savedTodo = await oldTodo.save()
        return savedTodo;
    }catch(e){
        throw Error("And Error occured while updating the Todo");
    }
}
*/

exports.deleteNoteFrais = async function(id){
    
    // Delete the NoteFrais
    try{
        var deleted = await NoteFrais.remove({_id: id})
        if(deleted.n === 0){
            throw Error("La note n'a pas pu être supprimée")
        }
        return deleted;
    }catch(e){
        throw Error(e.message)
    }
}