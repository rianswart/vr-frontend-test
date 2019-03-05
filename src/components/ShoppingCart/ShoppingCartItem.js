import React from 'react';
import { Grid, Card, Button } from 'semantic-ui-react';

const ShoppingCartItem = (props) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>{props.product.name}</Card.Header>
                <Card.Description>Quantity {props.product.quantity}</Card.Description>
                <Button
                    icon="down chevron"
                    onClick={() => props.removeFromCart(props.product)}
                />
                <Button
                    icon="up chevron"
                    onClick={() => props.addToCart(props.product)}
                />
            </Card.Content>
            <Card.Content extra>
                <Grid columns={2}>
                    <Grid.Column>
                        <h4>Price: ${props.product.price}</h4>
                    </Grid.Column>
                    <Grid.Column>
                        <h4>Sub total: ${props.getItemSubTotal(props.product)}</h4>
                    </Grid.Column>
                </Grid>
            </Card.Content>
        </Card>
    );
};

export default ShoppingCartItem;
