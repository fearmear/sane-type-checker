var getType = require('./getType');

module.exports = function isDate(value){
    return value instanceof Date || getType(value) === 'date';
};
