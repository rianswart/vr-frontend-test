/* globals it */

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import ShoppingCartItemIncrementer from './ShoppingCartItemIncrementer';

configure({ adapter: new Adapter() });

it('renders the shopping cart item incrementer', () => {
    shallow(<ShoppingCartItemIncrementer />);
});
