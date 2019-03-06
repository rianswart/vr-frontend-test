/* globals it, expect */

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import ShoppingCartGrandTotal from './ShoppingCartGrandTotal';

configure({ adapter: new Adapter() });

it('renders the shopping cart grand total', () => {
    const getGrandTotal = () => 123;
    const wrapper = mount(<ShoppingCartGrandTotal grandTotal={getGrandTotal} />);

    expect(wrapper.text()).toEqual('$123');
});
