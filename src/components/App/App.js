import React from 'react';
import PropTypes from 'prop-types';

import PropertyCard from './../PropertyCard';
import style from './style.scss';

export default class App extends React.Component {
    render() {
        const results = this.props.propertyList.results.map((property, index) => {
            return (
                <PropertyCard property={property} key={index}/>
            );
        });

        const savedProperties = this.props.propertyList.saved.map((property, index) => {
            return (
                <PropertyCard property={property} key={index}/>
            );
        });

        return (
            <div className="main-app">
                <div className="results">
                    <div className="heading">
                        results
                    </div>
                    {results}
                </div>
                <div className="saved-properties">
                    <div className="heading">
                        Saved Properties
                    </div>
                    {savedProperties}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    propertyList: PropTypes.object.isRequired
};