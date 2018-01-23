/**
 * Return image url for a given team name
 * @param {string} teamName 
 * @return {string}
 */
export function getTeamLogoUrl(teamName) {
    const keyword = teamName.toLowerCase();
    const path = '/images/icon-club-'
    switch (keyword) {
        case 'geelong cats':
            return urlToSVG(`${path}geel`);
        case 'port adelaide':
            return urlToSVG(`${path}adel`);
        case 'sydney swans':
            return urlToSVG(`${path}syd`);
        case 'collingood':
            return urlToSVG(`${path}coll`);
        case 'western bulldogs':
            return urlToSVG(`${path}wb`);
        default:
            return '';
    }
}

/**
 * Append '.svg' to a given url
 * @param {string} teamName 
 * @return {string}
 */
function urlToSVG(teamName) {
    return `${teamName}.svg`;
}

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