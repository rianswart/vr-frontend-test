import React from 'react';
import { Segment } from 'semantic-ui-react';

const ShoppingCartGrandTotal = (props) => {
    return (
        <Segment textAlign="right" size="massive">Total: { props.grandTotal }</Segment>
    );
};

export default ShoppingCartGrandTotal;
