const EnumMessage = require('../enums/EnumMessage');
const ArrayExpectedException = require('../exceptions/ArrayExpectedException');

/**
 * See if the first parameter is inside an array on the second parameter
 * @param {string|number|boolean} item 
 * @param {string|number|boolean} schema 
 * @returns boolean
 */
module.exports = (item, schema) => {
    if (Array.isArray(schema)) {
        return schema.includes(item);
    }

    throw new ArrayExpectedException(EnumMessage.SHOULD_PASS_AN_ARRAY, schema);
};
