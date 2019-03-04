import React, { Component } from 'react';

class ShoppingCart extends Component {
    render() {
        return (
            <section>
                <h1>Shopping Cart</h1>
                <ul>
                    <li>
                        Hacksaw <button>Remove</button>
                    </li>
                </ul>
            </section>
        );
    }
}

export default ShoppingCart;
