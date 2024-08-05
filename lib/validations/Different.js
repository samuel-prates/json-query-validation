const isDate = require('../utils/IsDate');

module.exports = (item, schema) => {
    let a = item;
    let b = schema;
    if (isDate(item)) {
        if (!isDate(schema)) {
            return true;
        }
        a = Date.parse(item);
        b = Date.parse(schema);
    }

    return a !== b;
};
