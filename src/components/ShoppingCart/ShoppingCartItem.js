import React from 'react';
import { Grid, Card, Button } from 'semantic-ui-react';

const ShoppingCartItem = (props) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>{props.product.name}</Card.Header>
                <Card.Description>Quantity {props.product.quantity}</Card.Description>
                <Button
                    icon="minus"
                    onClick={() => props.decrementProduct(props.product)}
                />
                <Button
                    icon="plus"
                    onClick={() => props.incrementProduct(props.product)}
                />
            </Card.Content>
            <Card.Content extra>
                <Grid columns={2}>
                    <Grid.Column>
                        <h4>Price: ${props.product.price.toFixed(2)}</h4>
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
