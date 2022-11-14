const initial = {
    id: '',
    name: '',
    title: '',
    salary: null,
    weakness: ''
};

//action creators
const setSelectedMinion = (minion)=>{
    return {
        type: 'setSelectedMinion',
        payload: minion
    }
};
const selectedMinionReducer = (state=initial, action) =>{
    switch(action.type){
        case 'setSelectedMinion':
            break;
        default:
            return state;
    }
}

export default selectedMinionReducer;