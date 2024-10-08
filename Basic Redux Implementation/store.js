// A simple holding state counter
let state = {
    counter: 5
};

// A basic dispatch API
function dispatch(action) { };

//Connect click events to dispatch
document.querySelector('#inc').onclick = () => dispatch('INC');
document.querySelector('#dec').onclick = ()=> dispatch('DEC');

//Update view
function updateView() {
    document.querySelector('#counter').innerText = state.counter;
}

//Subscribe to changes API
subscribe(updateView);

//Simple reducer for INC and DEC actions
//Our mutation (reducer) function creates a new state based on the action passed
function reducer(state, action) {
    switch (action) {
        case 'INC':
            return { ...state, counter: state.counter + 1 };
        case 'DEC':
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
}

//Implementation of the dispatch API

function dispatch(action) {
    const newState = reducer(state, action);

    if (newState !== state) {
        state = newState;

        listeners.forEach(listener => listener());
    }
}

//Implementation of the subscribe API
const listeners = [] ;

function subscribe(callback) {
    listeners.push(callback);
}
