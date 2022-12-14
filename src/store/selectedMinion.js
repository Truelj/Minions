const initial = {
    id: '',
    name: '',
    title: '',
    salary: null,
    weakness: ''
};

//action creators
export const setSelectedMinion = (minion)=>{
    return {
        type: 'setSelectedMinion',
        payload: minion
    }
};
const selectedMinionReducer = (state=initial, action) =>{
    console.log('selectedMinionReducer receives an action: ' + action.type);
    switch(action.type){
        case 'setSelectedMinion':
            return action.payload;
        default:
            return state;
    }
}

export default selectedMinionReducer;