import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import productsReducer from './reducers/products-reducer';
import cartReducer from './reducers/cart-reducer';

import * as serviceWorker from './serviceWorker';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

const allReducers = combineReducers({
    products: productsReducer,
    cart: cartReducer,
});

const store = createStore(
    allReducers,
    {
        products: [
            {
                name: 'Sledgehammer',
                price: 125.76,
                id: 1,
            }, {
                name: 'Axe',
                price: 190.51,
                id: 2,
            }, {
                name: 'Bandsaw',
                price: 562.14,
                id: 3,
            }, {
                name: 'Chisel',
                price: 13.9,
                id: 4,
            }, {
                name: 'Hacksaw',
                price: 19.45,
                id: 5,
            },
        ],
    },
    /* eslint-disable-next-line */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
