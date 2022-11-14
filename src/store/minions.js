const initial = [];

//action creators
const setMinions = (minions) =>{
    return{
        type: 'setMinions',
        payload: minions
    }
};
const addMinion = (minion) =>{
    return{
        type: 'addMinion',
        payload: minion
    }
};
const updateMinion = (minion) =>{
    return{
        type: 'updateMinion',
        payload: minion
    }
};
//thunks
const creatMinionThunk = (minion) => dispatch =>{
    
};
const updateMinionThunk = (minion) => dispatch => {
  
};
const deleteMinionThunk = (minion) => dispatch =>{
    
};
const minionsReducer = (state=initial, action) =>{
    switch(action.type){
        case 'setMinions':
            break;
        case 'addMinion':
            break;
        case 'updateMinion':
            break;
        default:
            return state;
    }
}

export default minionsReducer;