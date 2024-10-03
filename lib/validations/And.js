const EnumMessage = require('../enums/EnumMessage');
const ArrayExpectedException = require('../exceptions/ArrayExpectedException');
const ValidationService = require('../services/ValidationService');

/**
 * Match results in a array
 * @param {object} obj 
 * @param {object} schema 
 * @param {ValidationService} validationService 
 * @returns boolean
 */
module.exports = (obj, schema, validationService) => {
    if (Array.isArray(schema)) {
        for (let i = 0; i < schema.length; i++) {
            if (!validationService.validate(obj, schema[i])) {
                return false;
            }
        }
        return true;
    }

    throw new ArrayExpectedException(EnumMessage.SHOULD_PASS_AN_ARRAY, schema);
};
