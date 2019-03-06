import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const ShoppingCartItemIncrementer = (props) => {
    // console.log(props)
    return (
        <Fragment>
            <Button
                icon="minus"
                size="mini"
                onClick={() => props.decrementProduct(props.product)}
            />
            <span style={{ margin: 20 }}>{props.product.quantity}</span>
            <Button
                icon="plus"
                size="mini"
                onClick={() => props.incrementProduct(props.product)}
            />
        </Fragment>
    );
};

ShoppingCartItemIncrementer.defaultProps = {
    product: {},
    incrementProduct: null,
    decrementProduct: null,
};

ShoppingCartItemIncrementer.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        quantity: PropTypes.number,
    }),
    incrementProduct: PropTypes.func,
    decrementProduct: PropTypes.func,
};

export default ShoppingCartItemIncrementer;
