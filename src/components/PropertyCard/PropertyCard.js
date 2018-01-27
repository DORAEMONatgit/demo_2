import React from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

export default class PropertyCard extends React.Component {
  constructor(props) {
    super(props);

    this.blockName = 'property-card';
  }

  render() {
    const property = this.props.property;
    const headingStyle = {
      backgroundColor: property.agency.brandingColors.primary
    }

    const priceDivStyle = {
      borderColor: property.agency.brandingColors.primary
    };

    const blockName = this.blockName;
    return (
      <div className={blockName}>
        {/* heading */}
        <div className={`${blockName}__heading`} style={headingStyle}>
          <img
            src={property.agency.logo} 
            alt='logo'
          />
        </div>

        {/* main image */}
        <img
          className={`${blockName}__main-image`}
          src={property.mainImage}
          alt='main'
        />

        {/* price */}
        <div className={`${blockName}__price`} style={priceDivStyle}>
          Price: {property.price}
        </div>

        {/* children elements */}
        {this.props.children}
      </div>
    );
  }
}

PropertyCard.propTypes = {
  property: PropTypes.object.isRequired,
  children: PropTypes.element,
};