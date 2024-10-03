# query-validation
Easy way to validate with a json

### How to use

**1. Import Library**

```javascript
const { QueryValidationFactory } = require('query-validation');
const validationService = QueryValidationFactory.create();
```

**2. Define a query**

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

```

**2. Execute your search**

```js
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