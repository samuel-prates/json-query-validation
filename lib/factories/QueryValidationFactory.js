const ValidationService = require("../services/ValidationService");
const validations = require('../validations');

module.exports = class QueryValidationFactory {
    static create(strict = false) {
        return new ValidationService({
            andValidation: validations.andValidation,
            differentValidation: validations.differentValidation,
            equalValidation: validations.equalValidation,
            exactValidation: validations.exactValidation,
            greaterThanValidation: validations.greaterThanValidation,
            inValidation: validations.inValidation,
            lowerThanValidation: validations.lowerThanValidation,
            orValidation: validations.orValidation
        }, strict = false);
    }
}