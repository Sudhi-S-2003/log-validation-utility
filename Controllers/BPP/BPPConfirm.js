const { SechamaValidator } = require("../../Config");
const { BPPCONFIRMSCHEMA } = require("../../Schema/BPP");


const BPPConfirm= (req, res) => {
    const validateBPPSechama = SechamaValidator(BPPCONFIRMSCHEMA);

    const { valid, errors } = validateBPPSechama(req.body);

    if (!valid) {
        return res.status(400).json({ errors });
    }

    res.json({ Ack: { message: "Correct form" } });
};

module.exports = BPPConfirm;
