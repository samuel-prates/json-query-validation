const ParameterNotFoundException = require('../exceptions/ParameterNotFoundException');
const EnumMessage = require('../enums/EnumMessage');

class ValidationService {
    constructor({
        andValidation,
        differentValidation,
        equalValidation,
        exactValidation,
        greaterThanValidation,
        inValidation,
        lowerThanValidation,
        orValidation,
    }, strict = false) {
        this._and = andValidation;
        this._different = differentValidation;
        this._equal = equalValidation;
        this._exact = exactValidation;
        this._greaterThan = greaterThanValidation;
        this._in = inValidation;
        this._lowerThan = lowerThanValidation;
        this._or = orValidation;
        this._strict = strict;
    }

    set strict(bool) {
        this._strict = bool;
    }

    _object(key, obj, schema) {
        if (!obj[key] && ![false, 'false', 0].includes(obj[key])) {
            if (this._strict) {
                throw new ParameterNotFoundException(EnumMessage.PARAMETER_NOT_FOUND, { key, obj });
            }
            return false;
        }
        return this.validate(obj[key], schema);
    }

    _validateKey(key, obj, validationSchema) {
        switch (key) {
            case '$and':
                return this._and(obj, validationSchema, this);
            case '$or':
                return this._or(obj, validationSchema, this);
            case '$different':
                return this._different(obj, validationSchema);
            case '$equal':
                return this._equal(obj, validationSchema);
            case '$exact':
                return this._exact(obj, validationSchema);
            case '$greaterThan':
                return this._greaterThan(obj, validationSchema);
            case '$in':
                return this._in(obj, validationSchema);
            case '$lowerThan':
                return this._lowerThan(obj, validationSchema);
            default:
                return this._object(key, obj, validationSchema);
        }
    }

    _validateWithKey(obj, validationSchema) {
        let result = false;
        const keys = Object.keys(validationSchema);
        for (let i = 0; i < keys.length; i++) {
            result = this._validateKey(keys[i], obj, validationSchema[keys[i]]);
            if (!result) {
                return result;
            }
        }

        return result;
    }

    _validateWithArray(obj, validationSchema) {
        let result = false;
        for (let i = 0; i < validationSchema.length; i++) {
            result = this.validate(obj, validationSchema[i]);
            if (!result) {
                return result;
            }
        }
        return result;
    }

    validate(obj, validationSchema) {
        if (Array.isArray(validationSchema)) {
            return this._validateWithArray(obj, validationSchema);
        }
        return this._validateWithKey(obj, validationSchema);
    }
}

module.exports = ValidationService;
