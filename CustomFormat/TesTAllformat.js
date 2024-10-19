const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const ajvErrors = require("ajv-errors");
const { Allformat } = require("../Schema/Test");

const TesTAllformat = () => {
    const ajv = new Ajv({
        allErrors: true,
        strict: 'log',
        useDefaults: true,
    });

    addFormats(ajv);
    ajvErrors(ajv);

    // Define custom format for uppercase validation
    ajv.addFormat('custom-format', {
        validate: (data) => /^[A-Z]+$/.test(data),
    });

    // Define the custom keyword using addKeyword
    ajv.addKeyword('isUppercase', {
        type: 'string',
        validate: (schema, data) => /^[A-Z]+$/.test(data),
        errors: false
    });
    // Compile the schema
    const validateSchema = ajv.compile(Allformat);

    return (data) => {
        const valid = validateSchema(data);

        if (!valid) {
            validateSchema.errors.forEach(err => {
                if (err.keyword === 'format' && err.params.format === 'custom-format') {
                    err.message = 'customField must consist of uppercase letters only.';
                } else if (err.keyword === 'isUppercase') {
                    err.message = 'customField must be in full uppercase letters.';
                }
            });
        }

        return { valid, errors: validateSchema.errors };
    };
};

module.exports = TesTAllformat;
