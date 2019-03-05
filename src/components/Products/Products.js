import React, { Fragment } from 'react';
import { Card, Header } from 'semantic-ui-react';

import Product from './ProductItem';

const ShoppingCart = (props) => {
    const { products, cart } = props;

    return (
        <Fragment>
            <Header as="h1">Products</Header>
            <Card.Group>
                {
                    products.map(product => (
                        <Product
                            key={product.id}
                            product={product}
                            incrementProduct={props.incrementProduct}
                            cartItem={cart.filter(cartItem => cartItem.id === product.id)[0]}
                        />
                    ))
                }
            </Card.Group>
        </Fragment>
    );
};

export default ShoppingCart;
