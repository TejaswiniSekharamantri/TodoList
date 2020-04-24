export const addToList = (payload) => {
    return{
        type: 'ADD_TO_LIST',
        payload
    };
};

export const removeFromList = (index) => {
    return {
        type: 'REMOVE_FROM_LIST',
        index
    }
}