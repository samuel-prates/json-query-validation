const ParameterNotFoundException = require('../exceptions/ParameterNotFoundException');
const EnumMessage = require('../enums/EnumMessage');
const Validations = require('../validations');

class ValidationService {
    /**
     * A class service to validate from a query
     * @param { validations } validations the match patterns
     * @param { boolean } strict 
     */
    constructor(validations, strict = false) {
        const {
            andValidation = Validations.andValidation,
            differentValidation = validations.differentValidation,
            equalValidation = validations.equalValidation,
            exactValidation = validations.exactValidation,
            greaterThanValidation = validations.greaterThanValidation,
            inValidation = validations.inValidation,
            lowerThanValidation = validations.lowerThanValidation,
            orValidation = validations.orValidation,
        } = validations;
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

    /**
     * Search for the parameter
     * @param { string|object } key key to look and match
     * @param { * }  obj the base object where the key belong
     * @param { object } schema schema to match the value
     * @returns boolean | Error
     */
    _object(key, obj, schema) {
        if (!obj[key] && ![false, 'false', 0].includes(obj[key])) {
            if (this._strict) {
                throw new ParameterNotFoundException(EnumMessage.PARAMETER_NOT_FOUND, { key, obj });
            }
            return false;
        }
        return this.validate(obj[key], schema);
    }

    /**
     * Search for the schema to use in the match
     * @param { string|object } key key to look and match
     * @param { * } obj the base object to search in
     * @param { object } validationSchema 
     * @returns boolean | Error
     */
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

    /**
     * Start to search from a key
     * @param { * } obj 
     * @param { * } validationSchema 
     * @returns boolean | Error
     */
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

    /**
     * Start to search from a Array
     * @param { * } obj 
     * @param { * } validationSchema 
     * @returns boolean | Error
     */
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

    /**
     * Start from here
     * @param { string|object } obj 
     * @param { object|Array } validationSchema 
     * @returns boolean | Error
     */
    validate(obj, validationSchema) {
        if (Array.isArray(validationSchema)) {
            return this._validateWithArray(obj, validationSchema);
        }
        return this._validateWithKey(obj, validationSchema);
    }
}

module.exports = ValidationService;
