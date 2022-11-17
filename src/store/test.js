
//import actions
import {setMinions, addMinion, updateMinion, createMinionThunk, updateMinionThunk, deleteMinionThunk} from './minions.js';
import store from './index.js';

//test code

// Log the initial state
console.log('Initial state: ', store.getState())

// test actions
// 1.test 'setMinions()'
async function loadData(){
    try{
        const response = await fetch('http://localhost:4001/minions');
        const minions = await response.json();
        return minions;
    }catch(err){
        console.log(err);
    }
}


loadData().then((response) => {
    if(response){
        store.dispatch(setMinions(response));
        console.log('state:' + store.getState().minions);
    }
});

// 2.test 'addMinion()'
const newMinion = {
    name: 'Evan Cassin',
    title: 'Product manager',
    weaknesses: 'none',
    salary: 40000
}
let postOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(newMinion)
}
async function postMinion(){
    try{
        const response = await fetch('http://localhost:4001/minions', postOptions);
        if(response.ok){
            const minionInstance = await response.json();
            return minionInstance;
        }else{
            console.log('request to create minion failed');
        }
    }catch(err){//catch any error thrown from await
        console.log(err);
    }
}
/*
postMinion().then((minionInstance)=>{
    store.dispatch(addMinion(minionInstance));
    console.log('state:' + store.getState().minions);
})
*/
//3.test 'updateMinion()'
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
/*
updateAMinion()
    .then((updatedMinionInstance)=>{
        store.dispatch(updateMinion(updatedMinionInstance));
        console.log('state:' + store.getState().minions);
    });
*/

//test thunks....
//1.test createMinionThunk()

const anotherNewMinion = {
    name: 'Josh Copper',
    title: 'Data scientist',
    weaknesses: 'too smart',
    salary: 40000
};

store.dispatch(createMinionThunk(anotherNewMinion))
    //.then((response)=>{console.log(response)});

const anotherUpdatedMinion = {
    id: 11,
    name: 'Josh Copper',
    title: 'Data scientist',
    weaknesses: 'super smart(updated)',
    salary: 40000
};
//2.test updateMinionThunk()
store.dispatch(updateMinionThunk(anotherUpdatedMinion))
    //.then((response)=>{console.log(response)});

//3.test deleteMinionThunk()
const MinionToDelete = {
    id: 11,
    name: 'Josh Copper',
    title: 'Data scientist',
    weaknesses: 'too smart',
    salary: 40000
};

store.dispatch(deleteMinionThunk(MinionToDelete));


const Test = ()=>{
    return (
        <div></div>
    )
};

export default Test;