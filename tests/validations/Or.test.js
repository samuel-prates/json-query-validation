const orValidation = require('./../../lib/validations/Or');
const ArrayExpectedException = require('./../../lib/exceptions/ArrayExpectedException');

describe('Core :: Validations :: Or', () => {
    let validationService;
    beforeEach(() => {
        validationService = {
            validate: jest.fn(data => data)
        }
    });

    test('should run 1 time', () => {
        const obj = false;
        const schema = ['any', 'any'];
        const result = orValidation(obj, schema, validationService);

        expect(result).toBeFalsy();
        expect(validationService.validate).toHaveBeenCalledTimes(2);
    });

    test('should run 2 times', () => {
        const obj = true;
        const schema = ['any', 'any'];
        const result = orValidation(obj, schema, validationService);

        expect(result).toBeTruthy();
        expect(validationService.validate).toHaveBeenCalledTimes(1);
    });

    test('should throw an exception', () => {
        const obj = true;
        const schema = {'any': 'any'};
        let err;

        try{
            orValidation(obj, schema, validationService);
        } catch(error){
            err = error;
        }

        expect(err).toBeInstanceOf(ArrayExpectedException);
        expect(validationService.validate).toHaveBeenCalledTimes(0);
    });
});