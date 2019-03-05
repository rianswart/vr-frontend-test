import React from 'react';
import { Grid, Card, Button } from 'semantic-ui-react';

const Product = (props) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>{props.product.name}</Card.Header>
            </Card.Content>
            <Card.Content extra>
                <Grid columns={2}>
                    <Grid.Column>
                        <h4>Price: ${props.product.price}</h4>
                    </Grid.Column>
                    <Grid.Column>
                        <Button
                            primary
                            onClick={() => props.addToCart(props.product)}
                        >
                            Add to cart (
                            { (props.cartItem && props.cartItem.quantity) || 0 }
                            )
                        </Button>
                    </Grid.Column>
                </Grid>
            </Card.Content>
        </Card>
    );
};

export default Product;
