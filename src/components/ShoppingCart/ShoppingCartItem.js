import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import {
    Grid,
    Card,
    Button,
    Header,
} from 'semantic-ui-react';

import ShoppingCartItemIncrementer from './ShoppingCartItemIncrementer';

const ShoppingCartItem = props => (
    <Card>
        <Card.Content>
            <Card.Header>{props.product.name}</Card.Header>
        </Card.Content>
        <Card.Content extra align="center">
            <ShoppingCartItemIncrementer
                product={props.product}
                incrementProduct={props.incrementProduct}
                decrementProduct={props.decrementProduct}
            />
            <Button
                negative
                size="mini"
                onClick={() => props.removeProduct(props.product)}
            >
                Remove
            </Button>
        </Card.Content>
        <Card.Content extra>
            <Grid columns={2}>
                <Grid.Column>
                    <Header sub>Price</Header>
                    <NumberFormat
                        value={props.product.price.toFixed(2)}
                        displayType="text"
                        thousandSeparator
                        prefix="$"
                    />
                </Grid.Column>
                <Grid.Column>
                    <Header sub>Sub total</Header>
                    <NumberFormat
                        value={props.getItemSubTotal(props.product)}
                        displayType="text"
                        thousandSeparator
                        prefix="$"
                    />
                </Grid.Column>
            </Grid>
        </Card.Content>
    </Card>
);

ShoppingCartItem.defaultProps = {
    product: {},
    getItemSubTotal: null,
    incrementProduct: null,
    decrementProduct: null,
    removeProduct: null,
};

ShoppingCartItem.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        quantity: PropTypes.number,
    }),
    getItemSubTotal: PropTypes.func,
    incrementProduct: PropTypes.func,
    decrementProduct: PropTypes.func,
    removeProduct: PropTypes.func,
};

export default ShoppingCartItem;
