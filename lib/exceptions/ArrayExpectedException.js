class ArrayExpectedException extends Error {
    /**
     * Exception when its not a array
     * @param { string } message the message of the exception
     * @param { object } reference the objects that generate the exception
     */
    constructor(message, reference) {
        super(message);
        this.reference = reference;
    }
}

module.exports = ArrayExpectedException;
