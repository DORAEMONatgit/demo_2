import React from 'react';

import PropertyCard from './index';

describe('Render <PropertyCard />', () => {
  const property = {
    price: null,
    agency: {
      brandingColors: {
        primary: 'blue',
      },
      logo: null,
    },
    id: null,
    mainImage: null,
  };

  const getWrapper = () => {
    return mount(<PropertyCard property={property} />);
  };

  it('should render correctly', () => {
    const wrapper = getWrapper();
    expect(wrapper.length).not.to.throw;
  });

  it('should render the agent logo', () => {
    const wrapper = getWrapper();
    expect(wrapper.find('.property-card__heading img').length).to.equal(1);
  });

  it('should render the main image', () => {
    const wrapper = getWrapper();
    expect(wrapper.find('.property-card__main-image').length).to.equal(1);
  });

  it('should render the price div', () => {
    const wrapper = getWrapper();
    expect(wrapper.find('.property-card__price').length).to.equal(1);
  });

  it('should render the agent style color', () => {
    const wrapper = getWrapper();
    expect(wrapper.find('.property-card__heading').prop('style')).to.have.property('backgroundColor', 'blue');
  });
});