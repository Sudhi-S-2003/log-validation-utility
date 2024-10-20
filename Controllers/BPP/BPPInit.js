const { SechamaValidator } = require("../../Config");
const { BPPINITSCHEMA } = require("../../Schema/BPP");


const BPPInit= (req, res) => {
    const validateBPPSechama = SechamaValidator(BPPINITSCHEMA);

    const { valid, errors } = validateBPPSechama(req.body);

    if (!valid) {
        return res.status(400).json({ errors });
    }

    res.json({ Ack: { message: "Correct form" } });
};

module.exports = BPPInit;
