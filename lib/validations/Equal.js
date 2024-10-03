const isDate = require('../utils/IsDate');

/**
 * See if the 2 parameters are equal
 * @param {string|number|boolean} item 
 * @param {string|number|boolean} schema 
 * @returns boolean
 */
module.exports = (item, schema) => {
    let a = item;
    let b = schema;
    if (isDate(item)) {
        if (!isDate(schema)) {
            return false;
        }
        a = Date.parse(item);
        b = Date.parse(schema);
    }

    return a == b;
};
