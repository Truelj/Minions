//this is a test file to test server api
import fetch from 'node-fetch';

//create minions
let minions;
fetch('http://localhost:4001/minions')
    .then((response)=>(response.json()))
    .then((response)=>{minions = response; console.log(`test 1: create minions: ${minions}`)});


//add a minion 
const newMinion = {
    name: 'Evan Cassin',
    title: 'Product manager',
    weaknesses: 'none',
    salary: 40000
};
let postOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newMinion)
}
fetch('http://localhost:4001/minions', postOptions)
    .then((response)=>(response.json()))
    .then((response)=>{console.log(`test 2: add a minon ${response}`)});

//update a minion
const updatedMinion = {
    id: 11,
    name: 'Evan Cassin',
    title: 'Product manager',
    weaknesses: 'too aggressive(updated)',
    salary: 40000
};
let putOptions = {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(updatedMinion)
};

async function updateAMinion(){
    try{
        const response = await fetch('http://localhost:4001/minions/11', putOptions);
        if(response.ok){
            const minionInstance = await response.json();
            return minionInstance;
        }else{
            console.log('request to update minion failed');
        }
    }catch(err){//catch any error thrown from await
        console.log(err);
    }
}

updateAMinion()
    .then((response)=>{
        console.log(`test 3: update the newly added minion: ${response}`);
    });

//delete a minion

//delete all minions