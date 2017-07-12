var getType = require('./getType');

module.exports = function isNumber(value){
    return typeof value === 'number' || (typeof number === 'object' && value instanceof Number) || getType(value) === 'number';
};
