const { SechamaValidator } = require("../../Config");
const { BAPSEARCHSCHEMA } = require("../../Schema/BAP");


const BAPsearch = (req, res) => {
    const validateBAPSearch = SechamaValidator(BAPSEARCHSCHEMA);

    const { valid, errors } = validateBAPSearch(req.body);

    if (!valid) {
        return res.status(400).json({ errors });
    }

    res.json({ Ack: { message: "Correct form" } });
};

module.exports = BAPsearch;
