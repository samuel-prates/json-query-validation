const EnumMessage = require('../enums/EnumMessage');
const ArrayExpectedException = require('../exceptions/ArrayExpectedException');

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
