class FieldNotFoundException extends Error { 
    constructor(message, reference) {
        super(message);
        this.reference = reference;
    }
}

module.exports = FieldNotFoundException;
