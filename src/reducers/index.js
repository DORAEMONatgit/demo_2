import { ActionTypes } from '~/constants';

export const initialState = {
  results: [],
  saved: [],
};

/**
 * Reducer for <App />
 *
 * @param {object} state - app state
 * @param {object} action - redux action
 *
 * @return {object}
 */
export function appReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_PROPERTY: {
      // Filter out property from saved to prevent duplicatation
      const filteredList = state.saved.filter(property => property.id !== action.property.id);

      return {
        ...state,
        saved: [...filteredList, action.property],
      };
    }
    case ActionTypes.REMOVE_PROPERTY: {
      return {
        ...state,
        saved: state.saved.filter(item => item.id !== action.property.id),
      };
    }
    case 'testing_api_done': {
      return {
        ...state,
        test_data: action.data,
      };
    }
    default: {
      return state;
    }
  }
}
