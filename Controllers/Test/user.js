const { SechamaValidator } = require("../../Config");
const { UserSchema } = require("../../Schema/Test");

const validateSchema = SechamaValidator(UserSchema);

const user = (req, res) => {
    const { valid, errors } = validateBAPSearch(req.body);

    if (!valid) {
        return res.status(400).json({ errors });
    }

    res.json({ Ack: { message: "Correct form" } });
};

module.exports = user;
