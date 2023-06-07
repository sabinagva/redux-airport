import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';



/** TODO: Add REDUCERS */
const planeList = (state = [], action) => {
    console.log('in element list reducer')
    if (action.type === 'ADD') {
        console.log(`The added plane is ${action.payload}`)
        return [...state, action.payload]

    }
    return state

}


/** TODO: Create store */
//stores reducers
const storeInstance = createStore(
    combineReducers (
        {
            planeList
        }
    )

)



// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store = {storeInstance} >
          <App />
        </Provider>
        
    </React.StrictMode>
);