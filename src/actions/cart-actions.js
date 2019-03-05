export const ADD_TO_CART = 'addToCart';
export const REMOVE_FROM_CART = 'removeFromCart';

export const addToCart = (productId) => {
    return {
        type: ADD_TO_CART,
        payload: {},
    };
};

export const removeFromCart = (productId) => {
    return {
        type: REMOVE_FROM_CART,
        payload: {},
    };
};
