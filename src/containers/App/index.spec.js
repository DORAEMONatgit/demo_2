import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { appReducer } from '~/reducers';
import { getPropertyList } from '~/api';
import App from './index';

const propertyList = getPropertyList();
const listWrapperSelector = '.main-app__column-view-list-wrapper';
const propertyCardSelector = '.property-card';
const mainImageSelector = '.property-card__main-image';

/**
 * Return wrapper for
 * {
 *     mounted <App/>,
 *     result cards,
 *     saved cards
 * }
 */
function getWrapper() {
  const store = createStore(appReducer, propertyList);
  const wrapper = mount(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const cardColumns = wrapper.find(listWrapperSelector);
  const resultCards = cardColumns.at(0).find(propertyCardSelector);
  const savedCards = cardColumns.at(1).find(propertyCardSelector);

  return {
    wrapper,
    resultCards,
    savedCards
  }
}

/**
 * Testing connected <App/> using sample json
 * 
 * Require sample json to have at least 1 result and 1 saved property.
 */
describe('Render connected <App/>', () => {
  const initialState = propertyList;

  it('should render correctly', () => {
    const { wrapper } = getWrapper();
    expect(wrapper.length).not.to.throw;
  });

  it('should render all results', () => {
    const { resultCards } = getWrapper();

    const expected = initialState.results.length;
    expect(resultCards.length).to.equal(expected);
  });

  it('should render all saved', () => {
    const { savedCards } = getWrapper();

    const expected = initialState.saved.length;
    expect(savedCards.length).to.equal(expected);
  });

  context('after clicked on add property button', () => {
    it('should add the property card view in saved', () => {
      const { wrapper, resultCards } = getWrapper();

      const propertyToAdd = resultCards.at(0);
      // Click on the add property button
      propertyToAdd.find('button').simulate('click');
      const addedMainImage = propertyToAdd.find(mainImageSelector).prop('src');

      // Expect the length of saved to grow by 1
      const props = wrapper.find('App').props();
      const expectedLength = initialState.saved.length + 1;
      const actualLength = props.saved.length;
      expect(actualLength).to.equal(expectedLength);

      // Confirm the new property is in saved
      const searchInSaved = props.saved.find(item => {
        return item.mainImage === addedMainImage;
      });
      expect(searchInSaved).to.not.equal(undefined);
      expect(searchInSaved.mainImage).to.equal(addedMainImage);
    });
  });

  context('after clicked on remove property button', () => {
    it('should remove the property card view from saved', () => {
      const { wrapper, savedCards } = getWrapper();

      const propertyToRemove = savedCards.at(0);
      const imageToRemove = propertyToRemove.find(mainImageSelector).prop('src');
      expect(imageToRemove).not.be.empty;
      // Click on the remove property button
      propertyToRemove.find('button.remove').simulate('click');

      // Expect the length of saved to drop by 1
      const props = wrapper.find('App').props();
      const expectedLength = initialState.saved.length - 1;
      const actualLength = props.saved.length;
      expect(actualLength).to.equal(expectedLength);

      // Confirm property is not in saved
      const searchInSaved = props.saved.find(item => {
        return item.mainImage === imageToRemove;
      });
      expect(searchInSaved).to.equal(undefined);
    });
  });
});