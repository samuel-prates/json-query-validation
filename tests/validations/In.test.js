const inValidation = require('./../../lib/validations/In');
const ArrayExpectedException = require('./../../lib/exceptions/ArrayExpectedException');

describe('Core :: Validations :: In', () => {
    test('should return false', () => {
        const obj = 10;
        const schema = [9, 11, 15];
        const result = inValidation(obj, schema);

        expect(result).toBeFalsy();
    });

    test('should return true', () => {
        const obj = 10;
        const schema = [9, 11, 15, 10];
        const result = inValidation(obj, schema);

        expect(result).toBeTruthy();
    });

    test('should throw an exception', () => {
        const obj = true;
        const schema = {'any': 'any'};
        let err;

        try{
            inValidation(obj, schema);
        } catch(error){
            err = error;
        }

        expect(err).toBeInstanceOf(ArrayExpectedException);
    });
});
