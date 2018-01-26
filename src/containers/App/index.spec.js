import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { appReducer } from '~/reducers';
import { getPropertyList } from '~/api';
import ConnectedApp, { App } from './index';

describe('<ConnectedApp/>', () => {
    const propertyList = getPropertyList();
    const getWrapper = () => {
        const store = createStore(appReducer, propertyList);
        return mount(
            <Provider store={store}>
              <ConnectedApp />
            </Provider>
        );
    }

    it('should render correctly', () => {
        const wrapper = getWrapper();
        expect(wrapper.length).not.to.throw;
    });

    it('should render all results', () => {
        const wrapper = getWrapper();

        const expected = propertyList.results.length;
        const results = wrapper
            .find('.main-app__column-div-list-wrapper')
            .at(0)
            .find('.property-card');

        expect(results.length).to.equal(expected);
    });

    it('should render all saved', () => {
        const wrapper = getWrapper();

        const expected = propertyList.saved.length;
        const saved = wrapper
            .find('.main-app__column-div-list-wrapper')
            .at(1)
            .find('.property-card');
            
        expect(saved.length).to.equal(expected);
    });

    context('after clicked on add property button', () => {
        const wrapper = getWrapper();

        it('should render 1 extra saved', () => {
            const resultCards = wrapper
                .find('.main-app__column-div-list-wrapper')
                .at(0)
                .find('.property-card');
            const firstCardAddButton = resultCards
                .at(0)
                .find('button');

            firstCardAddButton.simulate('click');

            const expected = propertyList.saved.length + 1;
            const saved = wrapper
                .find('.main-app__column-div-list-wrapper')
                .at(1)
                .find('.property-card');
                
            expect(saved.length).to.equal(expected);
        });
    });

    context('after clicked on remove property button', () => {
        const wrapper = getWrapper();

        it('should remove 1 property from saved', () => {
            const savedCards = wrapper
                .find('.main-app__column-div-list-wrapper')
                .at(1)
                .find('.property-card');
            const firstCardRemoveButton = savedCards
                .at(0)
                .find('button.remove');

            firstCardRemoveButton.simulate('click');

            const expected = propertyList.saved.length - 1;
            const saved = wrapper.find('App').props().saved;

            expect(saved.length).to.equal(expected);
        });
    });
});

describe('<App />', () => {
    it('should render correctly', () => {
        const wrapper = mount(<App results={[]} saved={[]}/>);

        expect(wrapper).to.not.throw;
    })
});