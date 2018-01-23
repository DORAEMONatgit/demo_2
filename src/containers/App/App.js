import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PropertyCard from '~/components/PropertyCard';
import * as actions from '~/actions';

import './style.scss';

class App extends React.Component {
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
            onClick={() => { this.props.actions.addProperty(property); }}
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
              onClick={() => { this.props.actions.removeProperty(property); }}
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
        <div>
          <button onClick={this.props.actions.test}>Lets test it!</button>Test data: {this.props.test_data}
        </div>
        {/* Results column */}
        <div className={`${blockName}__column-view`}>
          <div className={`${blockName}__column-view-heading`}>
                        Results
          </div>
          <div className={`${blockName}__column-view-list-wrapper`}>
            {results}
          </div>
        </div>

        {/* padding div for spacing */}
        <div className={`${blockName}__column-view-padding-div`} />

        {/* Saved properties column */}
        <div className={`${blockName}__column-view`}>
          <div className={`${blockName}__column-view-heading`}>
                        Saved Properties
          </div>
          <div className={`${blockName}__column-view-list-wrapper`}>
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
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  saved: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.shape({
    addProperty: PropTypes.func.isRequired,
    removeProperty: PropTypes.func.isRequired,
    test: PropTypes.func.isRequired,
  }).isRequired,
  test_data: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    ...state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);