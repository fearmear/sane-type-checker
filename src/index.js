var SaneTypeChecker = function(){};

Object.assign(SaneTypeChecker.prototype, {
    getType: require('./getType'),
    isArray: require('./isArray'),
    isBoolean: require('./isBoolean'),
    isDate: require('./isDate'),
    isFunction: require('./isFunction'),
    isNull: require('./isNull'),
    isNumber: require('./isNumber'),
    isObject: require('./isObject'),
    isRegExp: require('./isRegExp'),
    isString: require('./isString'),
    isUndefined:require('./isUndefined')
});

module.exports = SaneTypeChecker;
