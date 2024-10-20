const { SechamaValidator } = require("../../Config");
const { BAPSTATUSSCHEMA } = require("../../Schema/BAP");


const BAPStatus = (req, res) => {
    const validateSchema = SechamaValidator(BAPSTATUSSCHEMA);

    const { valid, errors } = validateSchema(req.body);

    if (!valid) {
        return res.status(400).json({ errors });
    }

    res.json({ Ack: { message: "Correct form" } });
};

module.exports = BAPStatus;
