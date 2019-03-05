import React from 'react';
import PropTypes from 'prop-types';
import {
    Grid,
    Card,
    Button,
    Header,
} from 'semantic-ui-react';

const ProductItem = (props) => {
    const { product } = props;

    return (
        <Card>
            <Card.Content>
                <Card.Header>{product.name}</Card.Header>
            </Card.Content>
            <Card.Content extra>
                <Grid columns={2}>
                    <Grid.Column>
                        <Header sub>Price</Header>
                        <span>${product.price}</span>
                    </Grid.Column>
                    <Grid.Column>
                        <Button
                            primary
                            onClick={() => props.incrementProduct(product)}
                        >
                            Add to cart
                        </Button>
                    </Grid.Column>
                </Grid>
            </Card.Content>
        </Card>
    );
};

ProductItem.defaultProps = {
    product: {},
    incrementProduct: null,
};

ProductItem.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
    }),
    incrementProduct: PropTypes.func,
};

export default ProductItem;
