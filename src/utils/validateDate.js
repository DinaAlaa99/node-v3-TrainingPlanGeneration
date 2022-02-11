var validateDate = require("validate-date")



function isValid(date) {
    try {
        if (validateDate(date, responseType = "boolean", dateFormat = "yyyy-mm-dd")) {
            return true;
        } else {
            return false;
        }
    } catch (err) {
        return false;
    }

}

module.exports = isValid