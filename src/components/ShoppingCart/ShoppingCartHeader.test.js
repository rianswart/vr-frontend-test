/* globals it */

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import ShoppingCartHeader from './ShoppingCartHeader';

configure({ adapter: new Adapter() });

it('renders the shopping cart header', () => {
    shallow(<ShoppingCartHeader />);
});
