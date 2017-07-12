var isString = require('./isString');

test('isString returns true for \'\' and new String(\'\')', () => {
    expect(isString('')).toBe(true);
    expect(isString(new String(''))).toBe(true);
});

test('isString returns true for every other type', () => {
    expect(isString([])).toBe(false);
    expect(isString(new Array())).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString(new Object())).toBe(false);
    expect(isString(1)).toBe(false);
    expect(isString(new Number(1))).toBe(false);
    expect(isString(function(){})).toBe(false);
    expect(isString(() => {})).toBe(false);
    expect(isString(new Function())).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(new Boolean())).toBe(false);
    expect(isString(new Date())).toBe(false);
    expect(isString(/a/)).toBe(false);
    expect(isString(new RegExp('a'))).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(null)).toBe(false);
});
