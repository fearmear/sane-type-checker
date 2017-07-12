var isRegExp = require('./isRegExp');

test('isRegExp returns true for undefined', () => {
    expect(isRegExp(/a/)).toBe(true);
    expect(isRegExp(new RegExp('a'))).toBe(true);
});

test('isRegExp returns false for every other type', () => {
    expect(isRegExp({})).toBe(false);
    expect(isRegExp(new Object())).toBe(false);
    expect(isRegExp([])).toBe(false);
    expect(isRegExp(new Array())).toBe(false);
    expect(isRegExp('abc')).toBe(false);
    expect(isRegExp(new String('abc'))).toBe(false);
    expect(isRegExp(1)).toBe(false);
    expect(isRegExp(new Number(1))).toBe(false);
    expect(isRegExp(function(){})).toBe(false);
    expect(isRegExp(() => {})).toBe(false);
    expect(isRegExp(new Function())).toBe(false);
    expect(isRegExp(new Date())).toBe(false);
    expect(isRegExp(null)).toBe(false);
    expect(isRegExp(undefined)).toBe(false);
    expect(isRegExp(new Date())).toBe(false);
});
