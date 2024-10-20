const { SechamaValidator } = require("../../Config");
const { ConditionEnum } = require("../../Schema/Test");

const validateSchema = SechamaValidator(ConditionEnum);

const Enum = (req, res) => {
    const { valid, errors } = validateSchema(req.body); // Validate the request body

    if (!valid) {
        return res.status(400).json({ errors }); 
    }

    res.json({ Ack: { message: "Correct form" } });
};

module.exports = Enum;
