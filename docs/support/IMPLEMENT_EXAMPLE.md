# IMPLEMENTATION

### Steps to usage

**1. Import Library**

```javascript
const { andValidation,
    differentValidation,
    equalValidation,
    exactValidation,
    greaterThanValidation,
    inValidation,
    lowerThanValidation,
    orValidation }  = require('query-validation');
```

---

**1.0. run query**
```js
ruleEngine.registerRules ({
    // Priority for the execution
    "priority": 1,
    // The query to search for the right listeners to execute
    "query": {
        "id": {
            "$equal": "valuex"
        }
    },
    // name of the listener registered on step 3 ou 4
    "event": "firstSync"
});

```
---

**5.2. A more complex example**
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
        ]
    },
    // name of the listener registered on step 3 ou 4
    "event": "firstSync"
});

```

---

**6. You SHOULD register a postback function to do something or deal with exceptions**
```js
ruleEngine.postback((event) => {
    const { fact, error, eventStoped } = event;
    if(error){
        //do something
    } else {
        // do something
    }
});
```
---

**7. run your object**
```js
ruleEngine.execute({
    "id": "valuex",
    "processor": "value2",
    "country": "value3",
    "situation": {
        "reason_code": "value4"
    },
    "amount": 5,
    "fee": 6
});
```
---
