const data = require('./data.config.json');

export const salonsWithinPriceRange = (range) => {
    const salonObjectsArray = data.priceRange[range]
    return salonObjectsArray;
};