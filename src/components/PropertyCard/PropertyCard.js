import React from 'react';
import PropTypes from 'prop-types';

import style from './style.scss';

export default class PropertyCard extends React.Component {
    render() {
        const property = this.props.property;
        const style = {
            backgroundColor: property.agency.brandingColors.primary
        }
        return (
            <div className="property-card">
                <div className="heading" style={style}>
                    <img src={property.agency.logo} />
                </div>
                <div className="image">
                    <img src={property.mainImage} />
                </div>
                <div className="price">
                    {property.price}
                </div>
            </div>
        );
    }
}

PropertyCard.propTypes = {
    property: PropTypes.object.isRequired
};