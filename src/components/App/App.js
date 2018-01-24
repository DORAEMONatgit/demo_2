import React from 'react';
import PropTypes from 'prop-types';

import PropertyCard from './../PropertyCard';
import style from './style.scss';

export default class App extends React.Component {
    render() {
        const results = this.props.propertyList.results.map((property, index) => {
            return (
                <div className="property-card-wrapper" key={index}>
                    <PropertyCard property={property}/>
                    <button onClick={this.addProperty(property)}>add property</button>
                </div>
            );
        });

        const savedProperties = this.props.propertyList.saved.map((property, index) => {
            return (
                <div className="property-card-wrapper" key={index}>
                    <PropertyCard property={property}/>
                    <button  onClick={this.removeProperty(property)}>remove property</button>
                </div>
            );
        });

        return (
            <div className="main-app">
                <div className="column-div">
                    <div className="heading">
                        Results
                    </div>
                    {results}
                </div>
                <div className="padding-div">
                </div>
                <div className="column-div">
                    <div className="heading">
                        Saved Properties
                    </div>
                    {savedProperties}
                </div>
            </div>
        );
    }

    addProperty(property) {
        this.props.propertyList.saved.push(property);
    }

    removeProperty(property) {
        this.props.propertyList.saved.splice(property);
    }
}

App.propTypes = {
    propertyList: PropTypes.object.isRequired
};