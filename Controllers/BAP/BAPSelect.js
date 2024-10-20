const { SechamaValidator } = require("../../Config");
const { BAPSELECTSCHEMA } = require("../../Schema/BAP");


const BAPSelect = (req, res) => {
    const validateSchema = SechamaValidator(BAPSELECTSCHEMA);

    const { valid, errors } = validateSchema(req.body);

    if (!valid) {
        return res.status(400).json({ errors });
    }

    res.json({ Ack: { message: "Correct form" } });
};

module.exports = BAPSelect;
