# IMPLEMENTATION

### Steps to usage

**1. Import Library**

```javascript
const { QueryValidationFactory } = require('query-validation');
const validationService = QueryValidationFactory.create();
```

---

**1.1 Run query**
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

const searchFrom2 = {
    model: {
        common: "value3"
    }
};

validationService.validate(searchFrom, query); // return true
validationService.validate(searchFrom2, query); // return false

```