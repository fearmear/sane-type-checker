var isUndefined = require('./isUndefined');

test('isUndefined returns true for undefined', () => {
    expect(isUndefined()).toBe(true);
    expect(isUndefined(undefined)).toBe(true);
});

test('isUndefined returns false for every other type', () => {
    expect(isUndefined({})).toBe(false);
    expect(isUndefined(new Object())).toBe(false);
    expect(isUndefined([])).toBe(false);
    expect(isUndefined(new Array())).toBe(false);
    expect(isUndefined('abc')).toBe(false);
    expect(isUndefined(new String('abc'))).toBe(false);
    expect(isUndefined(1)).toBe(false);
    expect(isUndefined(new Number(1))).toBe(false);
    expect(isUndefined(function(){})).toBe(false);
    expect(isUndefined(() => {})).toBe(false);
    expect(isUndefined(new Function())).toBe(false);
    expect(isUndefined(new Date())).toBe(false);
    expect(isUndefined(/a/)).toBe(false);
    expect(isUndefined(new RegExp('a'))).toBe(false);
    expect(isUndefined(null)).toBe(false);
});