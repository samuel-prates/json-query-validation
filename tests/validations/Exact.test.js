const exactValidation = require('./../../lib/validations/Exact');

describe('Core :: Validations :: Exact', () => {
    test('should return false', () => {
        const obj = 10;
        const schema = '10';
        const result = exactValidation(obj, schema);

        expect(result).toBeFalsy();
    });

    test('should return true', () => {
        const obj = 10;
        const schema = 10;
        const result = exactValidation(obj, schema);

        expect(result).toBeTruthy();
    });

    test('should return false with date', () => {
        const obj = '2020-01-01T00:00:00';
        const schema = '2020-01-01T00:00:01';
        const result = exactValidation(obj, schema);

        expect(result).toBeFalsy();
    });

    test('should return true with date', () => {
        const obj = '2020-01-01T00:00:01';
        const schema = '2020-01-01T00:00:01';
        const result = exactValidation(obj, schema);

        expect(result).toBeTruthy();
    });

    test('should return false with date', () => {
        const obj = '2020-01-01T00:00:00';
        const schema = 'true';
        const result = exactValidation(obj, schema);

        expect(result).toBeFalsy();
    });
});