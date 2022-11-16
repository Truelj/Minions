
//import actions
import {setMinions, addMinion, updateMinion, createMinionThunk, updateMinionThunk} from './minions.js';
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
        console.log('state:' + store.getState());
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
    console.log('state:' + store.getState());
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
        console.log('state:' + store.getState());
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
const thunk = createMinionThunk(anotherNewMinion);
store.dispatch(thunk)
    .then((response)=>{console.log(response)});

//2.test updateMinionThunk()
store.dispatch(updateMinionThunk(updatedMinion))
    .then((response)=>{console.log(response)});

const Test = ()=>{
    return (
        <div></div>
    )
};

export default Test;