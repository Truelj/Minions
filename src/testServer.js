//this is a test file to test server api
import fetch from 'node-fetch';

let minions;
fetch('http://localhost:4001/minions')
    .then((response)=>(response.json()))
    .then((response)=>{minions = response; console.log(minions)});
