const { SechamaValidator } = require("../../Config");
const { BAPINITSCHEMA} = require("../../Schema/BAP");


const BAPInit = (req, res) => {
    const validateSchema = SechamaValidator(BAPINITSCHEMA);

    const { valid, errors } = validateSchema(req.body);

    if (!valid) {
        return res.status(400).json({ errors });
    }

    res.json({ Ack: { message: "Correct form" } });
};

module.exports = BAPInit;
