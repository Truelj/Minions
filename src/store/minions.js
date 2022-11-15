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
    
};
export const updateMinionThunk = (minion) => dispatch => {
  
};
export const deleteMinionThunk = (minion) => dispatch =>{
    
};
export const minionsReducer = (state=initial, action) =>{
    switch(action.type){
        case 'setMinions':
            return action.payload;
        case 'addMinion':
            break;
        case 'updateMinion':
            break;
        default:
            return state;
    }
}

export default minionsReducer;