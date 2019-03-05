import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';
import Products from './components/Products/Products';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }

    removeFromCart(product) {
        this.props.removeFromCart(product);
    }

    addToCart(product) {
        this.props.addToCart(product);
    }

    render() {
        return (
            <Container style={{ margin: 20 }}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={12}>
                            <Products {...this.props} />
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <ShoppingCart {...this.props} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.products,
        cart: state.cart,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item });
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
