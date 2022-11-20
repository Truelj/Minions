const express = require('express');
const apiRouter = express.Router();

const minionsRouter = require('./minionsRouter.js');
apiRouter.use('/minions', minionsRouter);

apiRouter.get('/', (req,res,next)=>{
    res.status(200).send('api router');
})
module.exports = apiRouter;