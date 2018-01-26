import { ActionTypes } from '~/constants';

/**
 * Redux action for add property
 * 
 * @param {object} property 
 * 
 * @return {object}
 */
export const addProperty = (property) => {
    return {
        type: ActionTypes.ADD_PROPERTY,
        property
    }
}

/**
 * Redux action for remove property
 * 
 * @param {object} property 
 * 
 * @return {object}
 */
export const removeProperty = (property) => {
    return {
        type: ActionTypes.REMOVE_PROPERTY,
        property
    }
}