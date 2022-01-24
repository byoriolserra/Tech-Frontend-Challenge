import React from 'react';
import { mount } from 'enzyme';
import Content from './Content';
import { Provider } from 'react-redux';
import store from '../../../store';

describe('Content', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Provider store={store}><Content title={'Test Section'} type={'categories'} /></Provider>);
    });

    it('renders without crashing', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('has a title', () => {
        const title = wrapper.find('h3');

        expect(title.text()).toEqual('TEST SECTION');
    });

    it('renders arrow buttons', () => {
        const arrow = wrapper.find('#arrow-buttons');

        expect(arrow).toHaveLength(1);
    });

    it('renders a list of tracks', () => {
        const atLeastOneTrack = wrapper.find('.last-track');

        expect(atLeastOneTrack).not.toBeNull();
    })
});