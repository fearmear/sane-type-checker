var getType = require('./getType');

module.exports = function isString(value){
    return typeof value === 'string' || (typeof value === 'object' && value instanceof String) || getType(value) === 'string';
};
