const UserSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
        },
        username: {
            type: 'string',
        },
        password: {
            type: 'string',
        },
        email: {
            type: 'string',
            format: 'email'
        }
    },
    required: ["email", "password"]
};

module.exports = UserSchema;
