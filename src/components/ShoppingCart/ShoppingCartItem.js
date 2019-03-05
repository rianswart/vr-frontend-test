import React from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    Card,
    Button,
    Header,
} from 'semantic-ui-react';

const ShoppingCartItem = props => (
    <Card>
        <Card.Content>
            <Card.Header>{props.product.name}</Card.Header>
        </Card.Content>
        <Card.Content extra align="center">
            <Button
                icon="minus"
                size="mini"
                onClick={() => props.decrementProduct(props.product)}
            />
            <span style={{ margin: 20 }}>{props.product.quantity}</span>
            <Button
                icon="plus"
                size="mini"
                onClick={() => props.incrementProduct(props.product)}
            />
        </Card.Content>
        <Card.Content extra>
            <Grid columns={2}>
                <Grid.Column>
                    <Header sub>Price</Header>
                    <span>${props.product.price.toFixed(2)}</span>
                </Grid.Column>
                <Grid.Column>
                    <Header sub>Sub total</Header>
                    <span>${props.getItemSubTotal(props.product)}</span>
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
};

export default ShoppingCartItem;
