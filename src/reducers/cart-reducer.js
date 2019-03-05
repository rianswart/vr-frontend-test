import {
    INCREMENT_PRODUCT,
    DECREMENT_PRODUCT,
    REMOVE_PRODUCT,
} from '../actions/cart-actions';

const cartWithoutProduct = (cart, product) => cart.filter(
    cartProduct => cartProduct.name !== product.name,
);

const incrementProduct = (cart, product) => {
    const cartProduct = cart.filter(currProduct => currProduct.name === product.name)[0];

    return cartProduct === undefined
        ? [...cartWithoutProduct(cart, product), {
            ...product,
            quantity: 1,
        }]
        : [...cartWithoutProduct(cart, product), {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
        }];
};

const decrementProduct = (cart, product) => (
    product.quantity === 1
        ? [...cartWithoutProduct(cart, product)]
        : [...cartWithoutProduct(cart, product), {
            ...product,
            quantity: product.quantity - 1,
        }]
);

const removeProduct = (cart, product) => [...cartWithoutProduct(cart, product)];

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case INCREMENT_PRODUCT:
            return incrementProduct(state, action.payload);

        case DECREMENT_PRODUCT:
            return decrementProduct(state, action.payload);

        case REMOVE_PRODUCT:
            return removeProduct(state, action.payload);

        default:
            return state;
    }
};

export default cartReducer;
