import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '~/actions';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PropertyCard from '~/components/PropertyCard';
import style from './style.scss';

class App extends React.Component {
    render() {
        const results = this.props.results.map((property) => {
            const alreadySaved = this.props.saved.includes(property);
            const btnText = alreadySaved ? 'already saved' : 'add property';

            return (
                <div className="property-card-wrapper" key={property.id}>
                    <PropertyCard property={property} />
                    <button
                        onClick={() => { this.props.actions.addProperty(property) }}
                        disabled={alreadySaved}>
                        {btnText}
                    </button>
                </div>
            );
        });

        const savedProperties = this.props.saved.map((property) => {
            return (
                <CSSTransition timeout={200} classNames="fade" key={property.id}>
                    <div className="property-card-wrapper">
                        <PropertyCard property={property} />
                        <button onClick={() => { this.props.actions.removeProperty(property) }}>remove property</button>
                    </div>
                </CSSTransition>
            );
        });

        return (
            <div className="main-app">
                <div className="column-div">
                    <div className="heading">
                        Results
                    </div>
                    <div className="list-wrapper">
                        {results}
                    </div>
                </div>
                <div className="padding-div">
                </div>
                <div className="column-div">
                    <div className="heading">
                        Saved Properties
                    </div>
                    <div className="list-wrapper">
                        <TransitionGroup>
                            {savedProperties}
                        </TransitionGroup>
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    results: PropTypes.array.isRequired,
    saved: PropTypes.array.isRequired
};

export default connect(
    state => ({
        ...state
    }),
    dispatch => ({
        actions: bindActionCreators(actions, dispatch),
    })
)(App);