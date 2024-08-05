const equalValidation = require('./../../lib/validations/Equal');

describe('Core :: Validations :: Equal', () => {
    test('should return false', () => {
        const obj = true;
        const schema = ['any', 'any'];
        const result = equalValidation(obj, schema);

        expect(result).toBeFalsy();
    });

    test('should return true', () => {
        const obj = 10;
        const schema = '10';
        const result = equalValidation(obj, schema);

        expect(result).toBeTruthy();
    });

    test('should return false with date', () => {
        const obj = '2020-01-01T00:00:00';
        const schema = '2020-01-01T00:00:01';
        const result = equalValidation(obj, schema);

        expect(result).toBeFalsy();
    });

    test('should return true with date', () => {
        const obj = '2020-01-01T00:00:01';
        const schema = '2020-01-01T00:00:01';
        const result = equalValidation(obj, schema);

        expect(result).toBeTruthy();
    });

    test('should return true with date', () => {
        const obj = '2020-01-01T00:00:01';
        const schema = 'true';
        const result = equalValidation(obj, schema);

        expect(result).toBeFalsy();
    });
});