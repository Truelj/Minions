const minionsRouter = require('express').Router();

export default minionsRouter;

import { addToDatabase, getAllFromDatabase, getFromDatabaseById, updateInstanceInDatabase, deleteFromDatabasebyId, deleteAllFromDatabase } from './db';
  

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

minionsRouter.get('/minions', (req, res, next) =>{
    console.log("get all minions");
    res.send(getAllFromDatabase('minions'));
});

minionsRouter.get('/minions/:minionId', (req, res, next)=>{
    console.log("get a minion with id : " + req.minion.id);
    res.status(200).send(req.minion);
});

minionsRouter.put('/minions/:minionId', (req, res, next)=>{
    console.log("update mininion id: " + req.minion.id);
    let updatedMinionInstance = updateInstanceInDatabase('minions', req.body);
    if(updatedMinionInstance){//is an instance
        console.log('updatedMinionInstanc: ' + updatedMinionInstance);
        res.status(200).send(updatedMinionInstance);
    }else{//null
        res.status(400).send();
    }
});

minionsRouter.post('/minions', (req,res,next)=>{
    try{
        console.log("post a new minion");
        let addedMinionInstance = addToDatabase('minions', req.body);
        console.log(addedMinionInstance);
        res.status(201).send(addedMinionInstance);
    }catch(err){
        console.log(err);
        res.status(400).send();
    }
    
    
})

minionsRouter.delete('/minions', (req,res,next)=>{
    deleteAllFromDatabase('minions');
    res.status(204);
});

minionsRouter.delete('/minions/:minionId', (req,res,next)=>{
    console.log("delete a minion");
    const deleted = deleteFromDatabasebyId('minions', req.params.minionId);
    if (deleted) {
      res.status(204);
    } else {
      res.status(500);
    }
    res.send();
});