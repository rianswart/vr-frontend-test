const productsReducer = (state = [], action) => {
    return [
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
    ];
};

export default productsReducer;
