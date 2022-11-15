const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

// Add middleware for handling CORS requests from index.html
const cors = require('cors');
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World')
});

const { 
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
    deleteAllFromDatabase,
  } = require('./db');
  
app.param('minionId', (req, res, next, id)=>{
    const minion = getFromDatabaseById('minions', id);
    if(minion){
        req.minion = minion;
        next();
    }else{
        res.status(404).send();
    }
});

app.get('/minions', (req, res, next) =>{
    res.send(getAllFromDatabase('minions'));
});

app.put('/minions/:minionId', (req, res, next)=>{
    let updatedMinionInstance = updateInstanceInDatabase('minions', req.body);
    if(updatedMinionInstance){
        res.status(200).send(updatedMinionInstance);
    }else{
        res.status(400).send();
    }
});

app.post('/minions', (req,res,next)=>{
    let addedMinionInstance = addToDatabase('minions', req.body);
    if(addedMinionInstance){
        res.status(201).send(addedMinionInstance);
    }else{
        res.status(400);
    }
    
})

app.delete('/minions', (req,res,next)=>{
    deleteAllFromDatabase('minions');
    res.status(204);
});

app.delete('/minions/:minionId', (req,res,next)=>{
    const deleted = deleteFromDatabasebyId('minions', req.params.minionId);
    if (deleted) {
      res.status(204);
    } else {
      res.status(500);
    }
    res.send();
});

app.listen(PORT, () => {
    console.log(`CORS-enabled Server listening on port ${PORT}`);
});