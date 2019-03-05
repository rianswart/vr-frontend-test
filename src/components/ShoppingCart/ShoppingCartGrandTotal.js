import React from 'react';
import { Header } from 'semantic-ui-react';

const ShoppingCartGrandTotal = (props) => {
    return (
        props.grandTotal() > 0 && <Header textAlign="right">Total: { props.grandTotal() }</Header>
    );
};

export default ShoppingCartGrandTotal;
