import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, Header } from 'semantic-ui-react';

import ProductItem from './ProductItem';

const Products = (props) => {
    const { products, cart } = props;

    return (
        <Fragment>
            <Header as="h1">Products</Header>
            <Card.Group>
                {
                    products.map(product => (
                        <ProductItem
                            key={product.name}
                            product={product}
                            incrementProduct={props.incrementProduct}
                            cartItem={cart.filter(cartItem => cartItem.name === product.name)[0]}
                        />
                    ))
                }
            </Card.Group>
        </Fragment>
    );
};

Products.defaultProps = {
    products: [],
    cart: [],
    incrementProduct: null,
};

Products.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            price: PropTypes.number,
        }),
    ),
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            price: PropTypes.number,
            quantity: PropTypes.number,
        }),
    ),
    incrementProduct: PropTypes.func,
};

export default Products;
