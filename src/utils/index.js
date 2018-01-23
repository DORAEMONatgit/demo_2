/**
 * Return image url for a given team name
 * @param {string} teamName 
 * @return {string}
 */
export function getTeamLogoUrl(teamName) {
    const keyword = teamName.toLowerCase();
    const path = '/images/icon-club-'
    switch(keyword) {
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