import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { updateUser } from './actions/user-actions';
import { Container, Grid, Card, Header } from 'semantic-ui-react';
import { addToCart } from './actions/cart-actions';
import logo from './logo.svg';
import Products from './components/Products/Products';
import Product from './components/Products/Product';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import ShoppingCartItem from './components/ShoppingCart//ShoppingCartItem';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.onUpdateUser = this.onUpdateUser.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    onUpdateUser(event) {
        this.props.onUpdateUser(event.target.value);
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
                            <Header as="h3">Products</Header>
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
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Header as="h2">Shopping cart</Header>
                            {
                                this.props.cart.map(product => (
                                    <ShoppingCartItem
                                        key={product.id}
                                        product={product}
                                    />
                                ))
                            }
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
        user: state.user,
        userPlusProp: `${state.user} ${props.randomProps}`,
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

const mapActionsToProps = (dispatch, props) => {
    // console.log(props);
    return bindActionCreators({
        // onUpdateUser: updateUser,
        addToCart,
    }, dispatch);
};

// export default connect(mapStateToProps, mapActionsToProps)(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
