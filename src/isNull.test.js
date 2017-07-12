var isNull = require('./isNull');

test('isNull returns true for null', () => {
    expect(isNull(null)).toBe(true);
});

test('isNull returns false for every other type', () => {
    expect(isNull({})).toBe(false);
    expect(isNull(new Object())).toBe(false);
    expect(isNull([])).toBe(false);
    expect(isNull(new Array())).toBe(false);
    expect(isNull('abc')).toBe(false);
    expect(isNull(new String('abc'))).toBe(false);
    expect(isNull(1)).toBe(false);
    expect(isNull(new Number(1))).toBe(false);
    expect(isNull(function(){})).toBe(false);
    expect(isNull(() => {})).toBe(false);
    expect(isNull(new Function())).toBe(false);
    expect(isNull(new Date())).toBe(false);
    expect(isNull(/a/)).toBe(false);
    expect(isNull(new RegExp('a'))).toBe(false);
    expect(isNull(undefined)).toBe(false);
});