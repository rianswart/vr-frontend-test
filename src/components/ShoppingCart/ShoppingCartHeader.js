import React from 'react';
import { Header } from 'semantic-ui-react';

const ShoppingCartHeader = (props) => {
    const itemsInCart = props.cart.length;

    return (
        <Header as="h2">Shopping cart {
            itemsInCart > 0 && (
                itemsInCart < 2
                    ? `(${itemsInCart} item)`
                    : `(${itemsInCart} items)`
            )
        }
        </Header>
    );
};

export default ShoppingCartHeader;
