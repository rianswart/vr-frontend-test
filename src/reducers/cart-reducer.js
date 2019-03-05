import {
    INCREMENT_PRODUCT,
    DECREMENT_PRODUCT,
} from '../actions/cart-actions';

const cartWithoutItem = (cart, item) => cart.filter(
    cartItem => cartItem.name !== item.name,
);

const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.name === item.name)[0];

const incrementProduct = (cart, item) => {
    const cartItem = itemInCart(cart, item);

    return cartItem === undefined
        ? [...cartWithoutItem(cart, item), {
            ...item, quantity: 1,
        }]
        : [...cartWithoutItem(cart, item), {
            ...cartItem, quantity: cartItem.quantity + 1,
        }];
};

const decrementProduct = (cart, item) => (
    item.quantity === 1
        ? [...cartWithoutItem(cart, item)]
        : [...cartWithoutItem(cart, item), { ...item, quantity: item.quantity - 1 }]
);

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case INCREMENT_PRODUCT:
            return incrementProduct(state, action.payload);

        case DECREMENT_PRODUCT:
            return decrementProduct(state, action.payload);

        default:
            return state;
    }
};

export default cartReducer;
