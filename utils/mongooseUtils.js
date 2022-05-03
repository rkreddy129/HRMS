const ObjectId = require('mongoose').Types.ObjectId;
const validator = require('validator');


/**
 * An Object containing all mongoose utility functions
 */
const mongooseUtilities = {
 isEmailValidator : ()=>{ 
    return {
        validator : function(value){
            return validator.isEmail(value);
        },
        message : props => `${props.value} is not a valid email address!`
    };
}
};
module.exports = mongooseUtilities;