const AJV = require("ajv");
const addFormats = require("ajv-formats");
const ajvErrors = require("ajv-errors");

const SechamaValidator = (schema) => {
    // Create a single AJV instance
    const ajv = new AJV({
        allErrors: true,
        strict: 'log',
    });

    // Add formats and custom formats
    addFormats(ajv);
    ajvErrors(ajv);

    // Define custom format for RFC 3339 date-time
    ajv.addFormat('rfc3339-date-time', (dateTimeString) => {
        const date = new Date(dateTimeString);
        
        // Check if the date is valid
        if (isNaN(date.getTime())) {
            return false; // Invalid date
        }
        
        // Convert the date to an RFC 3339 string
        const rfc3339String = date.toISOString();
        
        // Compare the original string with the RFC 3339 string
        return rfc3339String === dateTimeString;
    });

    // Compile the schema
    const validate = ajv.compile(schema);

    return (data) => {
        const valid = validate(data);
        return { valid, errors: validate.errors };
    };
};

module.exports = SechamaValidator;
