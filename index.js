const validations = require('./lib/validations');
const ValidationService = require('./lib/services/ValidationService')

module.exports = {
  validations,
  validationService: new ValidationService(
    validations.andValidation,
    validations.differentValidation,
    validations.equalValidation,
    validations.exactValidation,
    validations.greaterThanValidation,
    validations.inValidation,
    validations.lowerThanValidation,
    validations.orValidation
  ),
  ValidationService
}
