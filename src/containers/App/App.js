import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import style from './style.scss';

import PropertyCard from '~/components/PropertyCard';
import * as actions from '~/actions';

export class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.blockName = 'main-app';
    }

    render() {
        const results = this.props.results.map((property) => {
            const alreadySaved = this.props.saved.indexOf(property) !== -1;
            const btnText = alreadySaved ? 'saved' : 'add property';

            return (
                <PropertyCard property={property} key={property.id}>
                    <button
                      onClick={() => { this.props.actions.addProperty(property) }}
                      disabled={alreadySaved}
                    >
                        {btnText}
                    </button>
                </PropertyCard>
            );
        });

        const savedProperties = this.props.saved.map((property) => {
            return (
                <CSSTransition timeout={200} classNames="fade" key={property.id}>
                    <PropertyCard property={property}>
                        <button
                          onClick={() => { this.props.actions.removeProperty(property) }}
                          className='remove'
                        >
                            remove property
                        </button>
                    </PropertyCard>
                </CSSTransition>
            );
        });

        const blockName = this.blockName;
        return (
            <div className={blockName}>
                <div className={`${blockName}__column-div`}>
                    <div className={`${blockName}__column-div-heading`}>
                        Results
                    </div>
                    <div className={`${blockName}__column-div-list-wrapper`}>
                        {results}
                    </div>
                </div>
                <div className={`${blockName}__column-div-padding-div`}>
                </div>
                <div className={`${blockName}__column-div`}>
                    <div className={`${blockName}__column-div-heading`}>
                        Saved Properties
                    </div>
                    <div className={`${blockName}__column-div-list-wrapper`}>
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
    // istanbul ignore next
    state => ({
        ...state
    }),
    // istanbul ignore next
    dispatch => ({
        actions: bindActionCreators(actions, dispatch),
    })
)(App);