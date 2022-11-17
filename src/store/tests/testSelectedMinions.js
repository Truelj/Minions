import store from '../index.js';
import {setSelectedMinion} from '../selectedMinion';

//get a minion first
const getAMinion = async (id)=>{
    try{
        const response = await fetch(`http://localhost:4001/minions/${id}`);
        if(response.ok){
            const minion = await response.json();
            return minion
        }else{
            console.log('request to get a minion failed');
        }
    }catch(err){
        console.log(err);
    }
};

getAMinion(1).then((minion)=>{
    console.log(minion);
    store.dispatch(setSelectedMinion(minion));
    console.log("state.selectedMinion: " + store.getState().selectedMinion);
});
//use the minion to set the selectedMinion
//check the selectedMinon 

export default function testSelectedMinions(){
    return (
        <div></div>
    )
}