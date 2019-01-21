import React from 'react';
import {shallow} from 'enzyme';
import TimeOfDay from '../../ui/js/components/TimeOfDay'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('time of day should render proper time format', () => {

    let wrapper =  shallow(<TimeOfDay timestamp={1547659361} />)
    expect(wrapper.find('span').text()).toEqual('22:52')
});