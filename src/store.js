import { createStore } from 'redux';
import reducer from './reducer';
const initialState = {
    list: [ 'apples', 'bananas', 'oranges', 'pears' ]
};
const store = createStore(reducer, initialState);
export default store;