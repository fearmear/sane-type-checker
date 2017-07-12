var tc = new (require('./index'));
var isFunction = require('./isFunction');

test('every method should exist on a class', () => {
    expect(isFunction(tc.getType)).toBe(true);
    expect(isFunction(tc.isArray)).toBe(true);
    expect(isFunction(tc.isBoolean)).toBe(true);
    expect(isFunction(tc.isDate)).toBe(true);
    expect(isFunction(tc.isFunction)).toBe(true);
    expect(isFunction(tc.isNull)).toBe(true);
    expect(isFunction(tc.isNumber)).toBe(true);
    expect(isFunction(tc.isObject)).toBe(true);
    expect(isFunction(tc.isRegExp)).toBe(true);
    expect(isFunction(tc.isString)).toBe(true);
    expect(isFunction(tc.isUndefined)).toBe(true);
});
