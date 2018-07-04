const data = require('./db.json');

export const salonsWithinPriceRange = (range) => {
    const salonObjectsArray = data.filter( list => list[range] );
    return salonObjectsArray[0][range];
};