/* eslint-disable node/no-unsupported-features/es-syntax */
const res = require('express/lib/response');
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

/**
* A method to generate error message  by checking whether sql error or runtime error
z* @param {Object} e - An error object
* @returns Error message
*/
const generateErrorMessage = e => {
    let errMessage;
    if (e.sqlMessage ? (errMessage = e.sqlMessage) : (errMessage = e.message))
        return errMessage;
};


const createToken = async function (userDetails) {
    try {
        // const salt = await bcrypt.genSalt();
        // const hashPassword = await bcrypt.hash(userDetails.password, salt);
        // const user = { name: userDetails.userName, password: hashPassword }
        return jwt.sign(userDetails, process.env.ACCESS_TOKEN_SECRET);
    } catch (error) {
        return error
    }
}

module.exports = {
    generateErrorMessage,
    createToken
};