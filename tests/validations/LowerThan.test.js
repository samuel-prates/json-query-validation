const lowerThanValidation = require('./../../lib/validations/LowerThan');
const MismatchTypeException = require('./../../lib/exceptions/MismatchTypeException');

describe('Core :: Validations :: LowerThan', () => {
    test('should return false because is equal', () => {
        const obj = 10;
        const schema = '10';
        const result = lowerThanValidation(obj, schema);

        expect(result).toBeFalsy();
    });

    test('should return false because is bigger', () => {
        const obj = 10;
        const schema = '9';
        const result = lowerThanValidation(obj, schema);

        expect(result).toBeFalsy();
    });

    test('should return true', () => {
        const obj = 10;
        const schema = 11;
        const result = lowerThanValidation(obj, schema);

        expect(result).toBeTruthy();
    });

    test('should return false with date because is equal', () => {
        const obj = '2020-01-01T00:00:01';
        const schema = '2020-01-01T00:00:01';
        const result = lowerThanValidation(obj, schema);

        expect(result).toBeFalsy();
    });

    test('should return false with date because is bigger', () => {
        const obj = '2020-01-01T00:00:02';
        const schema = '2020-01-01T00:00:01';
        const result = lowerThanValidation(obj, schema);

        expect(result).toBeFalsy();
    });

    test('should return true with date', () => {
        const obj = '2020-01-01T00:00:01';
        const schema = '2020-01-01T00:00:02';
        const result = lowerThanValidation(obj, schema);

        expect(result).toBeTruthy();
    });

    test('should return true with date', () => {
        let err;
        const obj = '2020-01-01T00:00:02.000Z';
        const schema = 'true';
        try {
            lowerThanValidation(obj, schema);
        } catch (error) {
            err = error;
        }

        expect(err).toBeInstanceOf(MismatchTypeException);
    });
});