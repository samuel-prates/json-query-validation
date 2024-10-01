const greaterThanValidation = require('./../../lib/validations/GreaterThan');
const MismatchTypeException = require('./../../lib/exceptions/MismatchTypeException');

describe('Core :: Validations :: GreaterThan', () => {
    test('should return false because is equal', () => {
        const obj = 10;
        const schema = '10';
        const result = greaterThanValidation(obj, schema);

        expect(result).toBeFalsy();
    });

    test('should return false because is lower', () => {
        const obj = 9;
        const schema = '10';
        const result = greaterThanValidation(obj, schema);

        expect(result).toBeFalsy();
    });

    test('should return true', () => {
        const obj = 11;
        const schema = 10;
        const result = greaterThanValidation(obj, schema);

        expect(result).toBeTruthy();
    });

    test('should return false with date because is equal', () => {
        const obj = '2020-01-01T00:00:01';
        const schema = '2020-01-01T00:00:01';
        const result = greaterThanValidation(obj, schema);

        expect(result).toBeFalsy();
    });

    test('should return false with date because is lower', () => {
        const obj = '2020-01-01T00:00:01';
        const schema = '2020-01-01T00:00:02';
        const result = greaterThanValidation(obj, schema);

        expect(result).toBeFalsy();
    });

    test('should return true with date', () => {
        const obj = '2020-01-01T00:00:02';
        const schema = '2020-01-01T00:00:01';
        const result = greaterThanValidation(obj, schema);

        expect(result).toBeTruthy();
    });

    test('should return true with date', () => {
        let err;
        const obj = '2020-01-01';
        const schema = 'true';
        try {
            greaterThanValidation(obj, schema);
        } catch (error) {
            err = error;
        }

        expect(err).toBeInstanceOf(MismatchTypeException);
    });
});