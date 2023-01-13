import { createStore } from "redux";

// cara mengirim data
const counterState = {
    total: 20,
};

// reducer is function that will return state
const counterReducer = (state = counterState) => {
    return state
}

// store: method createStore content of reducer
const store = createStore(counterReducer)


export default store