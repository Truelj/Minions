
//import actions
import {setMinions, creatMinionThunk} from './minions.js';
import store from './index.js';

//test code

// Log the initial state
console.log('Initial state: ', store.getState())

// load data from the server
async function loadData(){
    try{
        const response = await fetch('http://localhost:4001/minions');
        const minions = await response.json();
        return minions;
    }catch(err){
        console.log(err);
    }
}
// Now, dispatch some actions

loadData().then((response) => {
    if(response){
        store.dispatch(setMinions(response));
        console.log('state:' + store.getState());
    }
});

const Test = ()=>{
    return (
        <div></div>
    )
};

export default Test;