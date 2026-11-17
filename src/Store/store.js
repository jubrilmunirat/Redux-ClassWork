import { createStore } from "redux";
const initialState = {
    counter: 0,

};
const CounterReducer = (state = initialState, action) => {
    if (action.type == 'increment') {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }
    if (action.type == 'decrement') {
        return {
            ...state,
            counter: state.counter - 1,
        }
    }
    if (action.type == 'Increase by 5') {
        return {
            ...state,
            counter: state.counter + 5,
        }
    }
    return state;
}
const store = createStore(CounterReducer);
export default store;