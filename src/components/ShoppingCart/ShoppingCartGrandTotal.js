import React from 'react';
import NumberFormat from 'react-number-format';
import { Header } from 'semantic-ui-react';

const ShoppingCartGrandTotal = props => (
    props.grandTotal() > 0 && (
        <Header textAlign="right">
            Total: <NumberFormat value={props.grandTotal()} displayType="text" thousandSeparator prefix="$" />
        </Header>
    )
);

export default ShoppingCartGrandTotal;
