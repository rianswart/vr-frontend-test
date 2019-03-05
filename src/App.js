import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Grid } from 'semantic-ui-react';

import Products from './components/Products/Products';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.incrementProduct = this.incrementProduct.bind(this);
        this.decrementProduct = this.decrementProduct.bind(this);
    }

    incrementProduct(product) {
        this.props.incrementProduct(product);
    }

    decrementProduct(product) {
        this.props.decrementProduct(product);
    }

    render() {
        return (
            <Container style={{ margin: 20 }}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column style={{ marginTop: 20 }} mobile={16} tablet={10} computer={12}>
                            <Products {...this.props} />
                        </Grid.Column>
                        <Grid.Column style={{ marginTop: 20 }} mobile={16} tablet={6} computer={4}>
                            <ShoppingCart {...this.props} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products,
    cart: state.cart,
});

const mapDispatchToProps = dispatch => ({
    incrementProduct: (item) => {
        dispatch({ type: 'INCREMENT_PRODUCT', payload: item });
    },
    decrementProduct: (item) => {
        dispatch({ type: 'DECREMENT_PRODUCT', payload: item });
    },
});

App.defaultProps = {
    incrementProduct: null,
    decrementProduct: null,
};

App.propTypes = {
    incrementProduct: PropTypes.func,
    decrementProduct: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
