var getType = require('./getType');

module.exports = function isBoolean(value){
    return typeof value === 'boolean' || (typeof value === 'object' && value instanceof Boolean) || getType(value) === 'boolean';
};
