const express = require('express');
const minionsRouter = express.Router();

module.exports = minionsRouter;

const { 
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
  } = require('./db.js');
  

minionsRouter.param('minionId', (req, res, next, id)=>{
    console.log("parse parameter");
    console.log("typeof id:" + typeof id);
    console.log("id: " + id);
    const minion = getFromDatabaseById('minions', id);
    if(minion){
        console.log('minion: '+ minion);
        req.minion = minion;
        next();
    }else{
        res.status(404).send();
    }
});

minionsRouter.get('/', (req, res, next) =>{
    //console.log("get all minions");
    res.status(200).send(getAllFromDatabase('minions'));
});

minionsRouter.get('/:minionId', (req, res, next)=>{
    //console.log("get a minion with id : " + req.minion.id);
    res.status(200).send(req.minion);
});

minionsRouter.put('/:minionId', (req, res, next)=>{
    console.log("update mininion id: " + req.minion.id);
    let updatedMinionInstance = updateInstanceInDatabase('minions', req.body);
    if(updatedMinionInstance){//is a valid instance
        console.log('updatedMinionInstanc: ' + updatedMinionInstance);
        res.status(200).send(updatedMinionInstance);
    }else{//null
        res.status(400).send();
    }
});

minionsRouter.post('/', (req,res,next)=>{
    console.log("post a new minion");
    let addedMinionInstance = addToDatabase('minions', req.body);
    if(addedMinionInstance){
        res.status(201).send(addedMinionInstance);
    }else{
        res.status(400).send();
    } 
})

minionsRouter.delete('/', (req,res,next)=>{
    deleteAllFromDatabase('minions');
    res.status(204);
});

minionsRouter.delete('/:minionId', (req,res,next)=>{
    console.log("delete a minion");
    const deleted = deleteFromDatabasebyId('minions', req.params.minionId);
    res.status(204).send();
});

