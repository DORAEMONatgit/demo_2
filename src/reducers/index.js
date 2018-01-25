import { ActionTypes } from '~/constants';

const initialState = {
    results: [],
    saved: []
};

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.ADD_PROPERTY:
            const newSaved = state.saved.filter(property => {
                return property.id !== action.property.id;
            })
            return {
                ...state,
                saved: [...newSaved, action.property]
            }

        case ActionTypes.REMOVE_PROPERTY:
            return {
                ...state,
                saved: state.saved.filter(item => {return item.id !== action.property.id })
            }

        default:
            return state;
    }
}