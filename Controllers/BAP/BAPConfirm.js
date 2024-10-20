const { SechamaValidator } = require("../../Config");
const { BAPCONFIRMSCHEMA} = require("../../Schema/BAP");


const BAPConfirm = (req, res) => {
    const validateSchema = SechamaValidator(BAPCONFIRMSCHEMA);

    const { valid, errors } = validateSchema(req.body);

    if (!valid) {
        return res.status(400).json({ errors });
    }

    res.json({ Ack: { message: "Correct form" } });
};

module.exports = BAPConfirm;
