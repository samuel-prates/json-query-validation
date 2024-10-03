class MismatchTypeException extends Error { 
    /**
     * Exception when mismatch type
     * @param { string } message the message of the exception
     * @param { object } reference the objects that generate the exception
     */
    constructor(message, reference) {
        super(message);
        this.reference = reference;
    }
}

module.exports = MismatchTypeException;
