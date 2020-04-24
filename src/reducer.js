
export default function reducer(state , action) {
    let copyList=[];
    switch(action.type){
        case 'ADD_TO_LIST':
            copyList = state.list.slice();
            copyList.push(action.payload);
            return { ...state, list: copyList };
        case 'REMOVE_FROM_LIST':
            copyList = state.list.slice();
            if (action.index > -1) {
                copyList.splice(action.index, 1);
            }
            console.log({ ...state, list: copyList });
            return { ...state, list: copyList };
        default:
            return state;
    }
}