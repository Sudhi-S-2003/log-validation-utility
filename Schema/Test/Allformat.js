const Allformat = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "isUppercase": true,
        },
        "email": { "type": "string", "format": "email" },
        "birthdate": { "type": "string", "format": "date" },
        "website": { "type": "string", "format": "uri" },
        "ipAddress": { "type": "string", "format": "ipv4" },
        "customField": {
            "type": "string",
            "format": "custom-format",
        },
        "timestamp": { "type": "string", "format": "date-time" },
        "hostname": { "type": "string", "format": "hostname" },
        "ipv6Address": { "type": "string", "format": "ipv6" },
        "uuid": { "type": "string", "format": "uuid" }
    },
    "required": ["email", "birthdate", "customField", "name"]
};

module.exports = Allformat;
