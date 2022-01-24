import React from 'react';
import { shallow } from 'enzyme';
import ContentContainer from './ContentContainer';
import Content from './ContentComponent/Content';

describe('Content container', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ContentContainer />);
    });

    it('renders without crashing', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('renders content', () => {
        const content = wrapper.find(Content);

        expect(content).toHaveLength(3);
    });
});