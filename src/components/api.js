const data = require('./data.config.json');

export const salonsWithinPriceRange = (range) => {
    const salonObjectsArray = data.filter( (list, i) => list[range] );
    return salonObjectsArray[0][range];
};