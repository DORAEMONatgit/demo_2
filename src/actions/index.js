import { ActionTypes } from '~/constants';

export const addProperty = property => {
    return {
        type: ActionTypes.ADD_PROPERTY,
        property
    }
}

export const removeProperty = property => {
    return {
        type: ActionTypes.REMOVE_PROPERTY,
        property
    }
}