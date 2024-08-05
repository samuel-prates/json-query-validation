const EnumMessage = require('../enums/EnumMessage');
const ArrayExpectedException = require('../exceptions/ArrayExpectedException');

module.exports = (item, schema) => {
    if (Array.isArray(schema)) {
        return schema.includes(item);
    }

    throw new ArrayExpectedException(EnumMessage.SHOULD_PASS_AN_ARRAY, schema);
};
