import React, { Component, Fragment } from 'react';
import { Card, Header } from 'semantic-ui-react';
import Product from './ProductItem';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.getGrandTotal = this.getGrandTotal.bind(this);
        this.getItemSubTotal = this.getItemSubTotal.bind(this);
    }

    getItemSubTotal(product) {
        return (product.price * product.quantity).toFixed(2);
    }

    getGrandTotal(cart) {
        return cart.reduce((prev, cur) => {
            return prev + (cur.price * cur.quantity);
        }, 0).toFixed(2);
    }

    removeFromCart(product) {
        this.props.removeFromCart(product);
    }

    addToCart(product) {
        this.props.addToCart(product);
    }

    render() {
        return (
            <Fragment>
                <Header as="h1">Products</Header>
                <Card.Group>
                    {
                        this.props.products.map(product => (
                            <Product
                                key={product.id}
                                product={product}
                                addToCart={this.addToCart}
                                cartItem={this.props.cart.filter(cartItem => cartItem.id === product.id)[0]}
                            />
                        ))
                    }
                </Card.Group>
            </Fragment>
        );
    }
}

export default ShoppingCart;
