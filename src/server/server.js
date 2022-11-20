const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

// Add middleware for handling CORS requests from index.html
const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//mount the apiRouter at the '/api' path
const apiRouter = require('./api');
app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`CORS-enabled Server listening on port ${PORT}`);
});

module.exports = app;
/*
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

app.get('/minions', (req, res, next) =>{
    console.log("get all minions");
    res.send(getAllFromDatabase('minions'));
});

app.get('/minions/:minionId', (req, res, next)=>{
    console.log("get a minion with id : " + req.minion.id);
    res.status(200).send(req.minion);
});

app.put('/minions/:minionId', (req, res, next)=>{
    console.log("update mininion id: " + req.minion.id);
    let updatedMinionInstance = updateInstanceInDatabase('minions', req.body);
    if(updatedMinionInstance){//is an instance
        console.log('updatedMinionInstanc: ' + updatedMinionInstance);
        res.status(200).send(updatedMinionInstance);
    }else{//null
        res.status(400).send();
    }
});

app.post('/minions', (req,res,next)=>{
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

app.delete('/minions', (req,res,next)=>{
    deleteAllFromDatabase('minions');
    res.status(204);
});

app.delete('/minions/:minionId', (req,res,next)=>{
    console.log("delete a minion");
    const deleted = deleteFromDatabasebyId('minions', req.params.minionId);
    if (deleted) {
      res.status(204);
    } else {
      res.status(500);
    }
    res.send();
});
*/

