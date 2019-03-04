import React from 'react';
import { Card, Button } from 'semantic-ui-react';

const Product = (props) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header>{props.product.name}</Card.Header>
                <Card.Description>{props.product.price}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className="ui two buttons">
                    <Button basic color="green" onClick={() => props.addToCart(props.product)}>
                        Add to cart
                    </Button>
                </div>
            </Card.Content>
        </Card>
    );
};

export default Product;
