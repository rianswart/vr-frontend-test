export const ADD_TO_CART = 'addToCart';

export const addToCart = (productId) => {
    console.log(productId);
    return {
        type: ADD_TO_CART,
        payload: {},
    };
};
