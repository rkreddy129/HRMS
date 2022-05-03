const { generateErrorMessage, createToken } = require('../utils/utilities');

const userAuthController = {

    userRegistration: async (req, res) => {
        try {
            const userName = req.body.username;
            const userDetails = { name: userName };
            let token = await createToken(userDetails); 
            res.status(200).json({ accessToken: token, status: 'true' });
        } catch (e) {
            return res.status(500).json({ Message: generateErrorMessage(e), status: 'false' });

        }
    },

    userRegistration: async (req, res) => {
        try {
            const userName = req.body.username;
            const userDetails = { name: userName };
            let token = await createToken(userDetails); 
            res.status(200).json({ accessToken: token, status: 'true' });
        } catch (e) {
            return res.status(500).json({ Message: generateErrorMessage(e), status: 'false' });

        }
    },
};
module.exports = userAuthController;


























































































