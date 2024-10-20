const { SechamaValidator } = require("../../Config");
const { BPPSEARCHSCHEMA } = require("../../Schema/BPP");


const BPPsearch = (req, res) => {
    const validateBPPSearch = SechamaValidator(BPPSEARCHSCHEMA);

    const { valid, errors } = validateBPPSearch(req.body);

    if (!valid) {
        return res.status(400).json({ errors });
    }

    res.json({ Ack: { message: "Correct form" } });
};

module.exports = BPPsearch;
