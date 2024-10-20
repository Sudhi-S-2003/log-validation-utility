const { SechamaValidator } = require("../../Config");
const { BPPSELECTSCHEMA } = require("../../Schema/BPP");


const BPPSelect= (req, res) => {
    const validateBPPSechama = SechamaValidator(BPPSELECTSCHEMA);

    const { valid, errors } = validateBPPSechama(req.body);

    if (!valid) {
        return res.status(400).json({ errors });
    }

    res.json({ Ack: { message: "Correct form" } });
};

module.exports = BPPSelect;
