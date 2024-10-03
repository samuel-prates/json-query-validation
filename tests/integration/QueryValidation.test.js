const QueryValidationFactory = require("../../lib/factories/QueryValidationFactory");
const validationService = QueryValidationFactory.create();
describe.only('Integration test', () => {
    test('validate empty objects', () => {
        const query = {};
        const searchFrom = {};

        expect(validationService.validate(searchFrom, query)).toBeFalsy();

    });

    test('validate string', () => {
        const query = { "$equal": "value" };
        const searchFrom = "value";

        expect(validationService.validate(searchFrom, query)).toBeTruthy();
    });

    test('validate equal match', () => {
        const query = {
            "model": {
                "common": {
                    "$equal": "value"
                }
            }
        };
        const searchFrom = {
            model: {
                common: "value"
            }
        };

        expect(validationService.validate(searchFrom, query)).toBeTruthy();
    });

    test('validate array match', () => {
        const query = {
            "$or": [{
                "model": {
                    "common": {
                        "$equal": "value"
                    }
                }
            },
            {
                "model": {
                    "common": {
                        "$equal": "value2"
                    }
                }
            }]
        };
        const searchFrom = {
            model: {
                common: "value2"
            }
        };

        expect(validationService.validate(searchFrom, query)).toBeTruthy();
    });

    test('validate fail array match', () => {
        const query = {
            "$or": [{
                "model": {
                    "common": {
                        "$equal": "value"
                    }
                }
            },
            {
                "model": {
                    "common": {
                        "$equal": "value2"
                    }
                }
            }]
        };
        const searchFrom = {
            model: {
                common: "value3"
            }
        };

        expect(validationService.validate(searchFrom, query)).toBeFalsy();
    });
})
