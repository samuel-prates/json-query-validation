const MismatchTypeException = require('../exceptions/MismatchTypeException');
const isDate = require('../utils/IsDate');
const EnumMessage = require('../enums/EnumMessage');

module.exports = (item, schema) => {
    let a = item;
    let b = schema;
    if (isDate(item)) {
        if (!isDate(schema)) {
            throw new MismatchTypeException(EnumMessage.PARAMETERS_SHOULD_BE_SAME_TYPE, { item, schema });
        }
        a = Date.parse(item);
        b = Date.parse(schema);
    }

    return a > b;
};
