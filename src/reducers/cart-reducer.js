const cartWithoutItem = (cart, item) => cart.filter(
    cartItem => cartItem.id !== item.id,
);

const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0];

const addToCart = (cart, item) => {
    const cartItem = itemInCart(cart, item);

    return cartItem === undefined
        ? [...cartWithoutItem(cart, item), {
            ...item, quantity: 1,
        }]
        : [...cartWithoutItem(cart, item), {
            ...cartItem, quantity: cartItem.quantity + 1,
        }];
};

const removeFromCart = (cart, item) => {
    // console.log(cart, item);
    // return {};
    return item.quantity === 1
        ? [...cartWithoutItem(cart, item)]
        : [...cartWithoutItem(cart, item), { ...item, quantity: item.quantity - 1 }];
};

export const getCartTotal = (state) => {
    console.log(state);
};

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            return addToCart(state, action.payload);

        case 'REMOVE':
            return removeFromCart(state, action.payload);

        default:
            return state;
    }
};


export default cartReducer;
