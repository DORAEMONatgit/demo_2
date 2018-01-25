/**
 * Split an array into two groups
 * Usage:
 *     [left, right] = partition(myArray, myFunc);
 * 
 * @param {Array} array - Target array 
 * @param {function} addToLeft - Function to check if a given item should be added to left array
 * 
 * @return {Array} - [Array, Array]
 */
export function partition(array, addToLeft) {
    return array.reduce((left, right, elem) => {
        return addToLeft(elem) ? [[...left, elem], right] : [left, [...right, elem]];
    }, [[], []]);
}