import React from 'react';
import PropTypes from 'prop-types';
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

ShoppingCartHeader.defaultProps = {
    cart: [],
};

ShoppingCartHeader.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            price: PropTypes.number,
            quantity: PropTypes.number,
        }),
    ),
};

export default ShoppingCartHeader;
