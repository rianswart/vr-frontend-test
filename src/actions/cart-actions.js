export const INCREMENT_PRODUCT = 'incrementProduct';
export const DECREMENT_PRODUCT = 'decrementProduct';

export const addToCart = (productId) => {
    return {
        type: INCREMENT_PRODUCT,
        payload: {},
    };
};

export const removeFromCart = (productId) => {
    return {
        type: DECREMENT_PRODUCT,
        payload: {},
    };
};
