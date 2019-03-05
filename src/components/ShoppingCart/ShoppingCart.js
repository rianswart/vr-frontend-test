import React, { Component, Fragment } from 'react';
import { Header } from 'semantic-ui-react';
import ShoppingCartItem from './ShoppingCartItem';
import ShoppingCartGrandTotal from './ShoppingCartGrandTotal';

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
                <Header as="h2">Shopping cart {this.props.cart.length}</Header>
                {
                    this.props.cart.map(product => (
                        <ShoppingCartItem
                            key={product.id}
                            product={product}
                            addToCart={this.addToCart}
                            removeFromCart={this.removeFromCart}
                            getItemSubTotal={this.getItemSubTotal}
                        />
                    ))
                }
                <ShoppingCartGrandTotal
                    grandTotal={this.getGrandTotal(this.props.cart)}
                />
            </Fragment>
        );
    }
}

export default ShoppingCart;
