var getType = require('./getType');

module.exports = function isRegExp(value){
    return value instanceof RegExp || getType(value) === 'regexp';
};
