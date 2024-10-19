const {TesTAllformat} = require("../../CustomFormat"); 
const validateSchema = TesTAllformat(); 

const All = (req, res) => {
    const { valid, errors } = validateSchema(req.body); // Validate the request body

    if (!valid) {
        return res.status(400).json({ errors }); 
    }

    res.json({ Ack: { message: "Correct form" } });
};

module.exports = All;
