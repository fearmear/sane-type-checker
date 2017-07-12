var isDate = require('./isDate');

test('isDate returns true for undefined', () => {
    expect(isDate(new Date())).toBe(true);
});

test('isDate returns false for every other type', () => {
    expect(isDate({})).toBe(false);
    expect(isDate(new Object())).toBe(false);
    expect(isDate([])).toBe(false);
    expect(isDate(new Array())).toBe(false);
    expect(isDate('abc')).toBe(false);
    expect(isDate(new String('abc'))).toBe(false);
    expect(isDate(1)).toBe(false);
    expect(isDate(new Number(1))).toBe(false);
    expect(isDate(function(){})).toBe(false);
    expect(isDate(() => {})).toBe(false);
    expect(isDate(new Function())).toBe(false);
    expect(isDate(/a/)).toBe(false);
    expect(isDate(new RegExp('a'))).toBe(false);
    expect(isDate(null)).toBe(false);
});