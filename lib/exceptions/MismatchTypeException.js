class MismatchTypeException extends Error { 
    constructor(message, reference) {
        super(message);
        this.reference = reference;
    }
}

module.exports = MismatchTypeException;
