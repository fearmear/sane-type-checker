var isNumber = require('./isNumber');

test('isNumber returns true for 1 and new Number(1)', () => {
    expect(isNumber(1)).toBe(true);
    expect(isNumber(new Number(1))).toBe(true);
});

test('isNumber returns true for every other type', () => {
    expect(isNumber([])).toBe(false);
    expect(isNumber(new Array())).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber(new Object())).toBe(false);
    expect(isNumber('abc')).toBe(false);
    expect(isNumber(new String('abc'))).toBe(false);
    expect(isNumber(function(){})).toBe(false);
    expect(isNumber(() => {})).toBe(false);
    expect(isNumber(new Function())).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(new Boolean())).toBe(false);
    expect(isNumber(new Date())).toBe(false);
    expect(isNumber(/a/)).toBe(false);
    expect(isNumber(new RegExp('a'))).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(null)).toBe(false);
});