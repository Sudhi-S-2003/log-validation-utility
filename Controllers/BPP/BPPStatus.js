const { SechamaValidator } = require("../../Config");
const { BPPSTATUSSCHEMA} = require("../../Schema/BPP");


const BPPStatus= (req, res) => {
    const validateBPPSechama = SechamaValidator(BPPSTATUSSCHEMA);

    const { valid, errors } = validateBPPSechama(req.body);

    if (!valid) {
        return res.status(400).json({ errors });
    }

    res.json({ Ack: { message: "Correct form" } });
};

module.exports = BPPStatus;
