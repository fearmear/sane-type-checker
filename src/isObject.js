var getType = require('./getType');

module.exports = function isObject(value){
    return getType(value) === 'object';
};
