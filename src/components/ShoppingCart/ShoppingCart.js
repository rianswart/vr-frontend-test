import React, { Component, Fragment } from 'react';

import ShoppingCartHeader from './ShoppingCartHeader';
import ShoppingCartItem from './ShoppingCartItem';
import ShoppingCartGrandTotal from './ShoppingCartGrandTotal';

class ShoppingCart extends Component {
    constructor(props) {
        super(props);

        this.getGrandTotal = this.getGrandTotal.bind(this);
        this.getItemSubTotal = this.getItemSubTotal.bind(this);
    }

    getItemSubTotal(product) {
        return (product.price * product.quantity).toFixed(2);
    }

    getGrandTotal() {
        return this.props.cart.reduce((prev, cur) => {
            return prev + (cur.price * cur.quantity);
        }, 0).toFixed(2);
    }

    render() {
        const { cart } = this.props;

        return (
            <Fragment>
                <ShoppingCartHeader {...this.props} />
                { cart.length > 0
                    ? cart.map(product => (
                        <ShoppingCartItem
                            key={product.id}
                            product={product}
                            incrementProduct={this.props.incrementProduct}
                            decrementProduct={this.props.decrementProduct}
                            getItemSubTotal={this.getItemSubTotal}
                        />
                    ))
                    : <span>You don&apos;t have any items in your shopping cart</span>
                }
                <ShoppingCartGrandTotal grandTotal={this.getGrandTotal} />
            </Fragment>
        );
    }
}

export default ShoppingCart;
