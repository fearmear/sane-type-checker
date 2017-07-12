var getType = require('./getType');
var isFunction = require('./isFunction');

module.exports = function isArray(value){
    if (value instanceof Array) {
        return true;
    }
    if (isFunction(Array.isArray)) {
        return Array.isArray(value);
    } else {
        return getType(value) === 'array';
    }
};
