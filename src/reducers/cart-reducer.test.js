/* globals it, expect */

import cartReducer from './cart-reducer';
import {
    INCREMENT_PRODUCT,
    DECREMENT_PRODUCT,
    REMOVE_PRODUCT,
} from '../actions/cart-actions';

const quantity = 5;

it('should handle INCREMENT_PRODUCT', () => {
    expect(
        cartReducer([{
            name: 'Axe',
            price: 123.45,
            quantity,
        }], {
            type: INCREMENT_PRODUCT,
            payload: {
                name: 'Axe',
                price: 123.45,
                quantity,
            },
        }),
    ).toEqual([
        {
            name: 'Axe',
            price: 123.45,
            quantity: quantity + 1,
        },
    ]);
});

it('should handle DECREMENT_PRODUCT', () => {
    expect(
        cartReducer([{
            name: 'Axe',
            price: 123.45,
            quantity,
        }], {
            type: DECREMENT_PRODUCT,
            payload: {
                name: 'Axe',
                price: 123.45,
                quantity,
            },
        }),
    ).toEqual([
        {
            name: 'Axe',
            price: 123.45,
            quantity: quantity - 1,
        },
    ]);
});

it('should handle REMOVE_PRODUCT', () => {
    expect(
        cartReducer([{
            name: 'Axe',
            price: 123.45,
        }], {
            type: REMOVE_PRODUCT,
            payload: {
                name: 'Axe',
                price: 123.45,
            },
        }),
    ).toEqual([]);
});
