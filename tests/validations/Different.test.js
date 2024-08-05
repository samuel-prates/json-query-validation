const differentValidation = require('./../../lib/validations/Different');

describe('Core :: Validations :: Different', () => {
    test('should return false', () => {
        const obj = true;
        const schema = true;
        const result = differentValidation(obj, schema);

        expect(result).toBeFalsy();
    });

    test('should return true', () => {
        const obj = true;
        const schema = ['any', 'any'];
        const result = differentValidation(obj, schema);

        expect(result).toBeTruthy();
    });

    test('should return false with date', () => {
        const obj = '2020-01-01T00:00:01';
        const schema = '2020-01-01T00:00:01';
        const result = differentValidation(obj, schema);

        expect(result).toBeFalsy();
    });

    test('should return true with date', () => {
        const obj = '2020-01-01T00:00:00';
        const schema = '2020-01-01T00:00:01';
        const result = differentValidation(obj, schema);

        expect(result).toBeTruthy();
    });

    test('should return false with unmatch type', () => {
        const obj = '2020-01-01T00:00:00';
        const schema = 'true';
        const result = differentValidation(obj, schema);

        expect(result).toBeTruthy();
    });
});