# IMPLEMENTATION

### Steps to usage

**1. Import Library**

```javascript
const { QueryValidationFactory } = require('query-validation');
const validationService = QueryValidationFactory.create();
```

---

**1.1 run query**
```js
const query = { "$equal": "value" };
const searchFrom = "value";

validationService.validate(searchFrom, query); // return true

```
---

**1.2 A more complex example**
```js
const query = {
    "$or": [{
        "model": {
            "common": {
                "$equal": "value"
            }
        }
    },
    // name of the listener registered on step 3 ou 4
    "event": "firstSync"
});

```
---

**1.2 A more complex example**
```js
ruleEngine.registerRules ({
    // Priority for the execution
    "priority": 1,
    // The query to search for the right listeners to execute
    "query": {
        "$and": [
            {
                "id": {
                    "$equal": "value1"
                }
            },
            {
                "processor": {
                    "$different": "value2"
                }
            },
            {
                "$or": [
                    {
                        "country": {
                            "$exact": "value3"
                        }
                    },
                    {
                        "situation": {
                            "reason_code": {
                                "$in": [
                                    4,
                                    5
                                ]
                            }
                        }
                    }
                ]
            },
            {
                "amount": {
                    "$greaterThan": 6
                }
            },
            {
                "fee": {
                    "$lowerThan": 8
                }
            }
        }
    }]
};
const searchFrom = {
    model: {
        common: "value2"
    }
};

const searchFrom2 = {
    model: {
        common: "value3"
    }
};

validationService.validate(searchFrom, query); // return true
validationService.validate(searchFrom2, query); // return false

```