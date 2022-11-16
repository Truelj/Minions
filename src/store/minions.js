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
export const creatMinionThunk = (minion) => dispatch =>{
    return async function postMinionThunk(dispatch){
        let postOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(minion)
        }
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
};

export const updateMinionThunk = (minion) => dispatch => {
    return async function updateAMinionThunk(){
        let putOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(minion)
        };
        
        try{
            const response = await fetch(`http://localhost:4001/minions/${minion.id}`, putOptions);
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
};
export const deleteMinionThunk = (minion) => dispatch =>{
    
};
export const minionsReducer = (state=initial, action) =>{
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