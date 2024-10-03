const moment = require('moment');

/**
 * 
 * @param {string} date 
 * @returns 
 */
module.exports = date => {
    return moment(date, 'YYYY-MM-DD', true).isValid() ||
        moment(date, 'YYYY-MM-DDTHH:mm:ss', true).isValid() ||
        moment(date, 'YYYY-MM-DDTHH:mm:ss.SSSZ', true).isValid();
};