import { setSelectedMinion } from "./selectedMinion";

const initial = [];

//action creators
export const setMinions = (minions) =>{
    return{
        type: 'setMinions',
        payload: minions
    }
};
export const addMinion = (minion) =>{
    return{
        type: 'addMinion',
        payload: minion
    }
};
export const updateMinion = (minion) =>{
    return{
        type: 'updateMinion',
        payload: minion
    }
};
//thunks
export const createMinionThunk = (minion) => async dispatch => {
    let postOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(minion)
    }
    try{
        const response = await fetch('http://localhost:4001/minions', postOptions);
        if(response.ok){
            const minionInstance = await response.json();
            //console.log('thunk: minion instance is'  + Object.values(minionInstance));
            dispatch(addMinion(minionInstance));
            dispatch(setSelectedMinion(minionInstance));
            return minionInstance;
        }else{
            console.log('request to create minion failed');
        }
    }catch(err){//catch any error thrown from await
        console.log(err);
    }
};

export const updateMinionThunk = (minion) => async dispatch => {
    let putOptions = {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(minion)
    };
    try{
        const response = await fetch(`http://localhost:4001/minions/${minion.id}`, putOptions);
        if(response.ok){
            const minionInstance = await response.json();
            dispatch(updateMinion(minionInstance));
            return minionInstance;
        }else{
            console.log('request to update minion failed');
        }
    }catch(err){//catch any error thrown from await
        console.log(err);
    }
};
export const deleteMinionThunk = (id) => async dispatch =>{
    let deleteOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    }
    try{
        const response = await fetch(`http://localhost:4001/minions/${id}`, deleteOptions);
        if(response.ok){
            console.log('deleteMinionThunk: delete succeed')
            //fetch minions
            const response = await fetch('http://localhost:4001/minions');
            if(response.ok){
                const minions = await response.json();
                dispatch(setMinions(minions));
            }else{
                console.log('request to get minions failed');
            }
        }else{
            console.log('request to delete minion failed');
        }
    }catch(err){//catch any error thrown from await
        console.log(err);
    }
};
export const minionsReducer = (state=initial, action) =>{
    console.log('minionsReducer receives an action: ' + action.type);
    switch(action.type){
        case 'setMinions':
            return action.payload;
        case 'addMinion':
            return [...state, action.payload];
        case 'updateMinion':
            const index = state.findIndex((minion)=>{return minion.id=action.payload.id});
            return [...state.slice(0,index), action.payload, ...state.slice(index+1)];
        default:
            return state;
    }
}

export default minionsReducer;