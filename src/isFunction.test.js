var isFunction = require('./isFunction');

test('isFunction returns true for function(){}, () => {} and new Function()', () => {
    expect(isFunction(function(){})).toBe(true);
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(new Function())).toBe(true);
});

test('isFunction returns true for every other type', () => {
    expect(isFunction([])).toBe(false);
    expect(isFunction(new Array())).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction(new Object())).toBe(false);
    expect(isFunction('abc')).toBe(false);
    expect(isFunction(new String('abc'))).toBe(false);
    expect(isFunction(1)).toBe(false);
    expect(isFunction(new Number(1))).toBe(false);
    expect(isFunction(true)).toBe(false);
    expect(isFunction(new Boolean())).toBe(false);
    expect(isFunction(new Date())).toBe(false);
    expect(isFunction(/a/)).toBe(false);
    expect(isFunction(new RegExp('a'))).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction(null)).toBe(false);
});