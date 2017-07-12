var isBoolean = require('./isBoolean');

test('isBoolean returns true for true and new Boolean()', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(new Boolean())).toBe(true);
});

test('isBoolean returns false for every other type', () => {
    expect(isBoolean({})).toBe(false);
    expect(isBoolean(new Object())).toBe(false);
    expect(isBoolean([])).toBe(false);
    expect(isBoolean(new Array())).toBe(false);
    expect(isBoolean('abc')).toBe(false);
    expect(isBoolean(new String('abc'))).toBe(false);
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean(new Number(1))).toBe(false);
    expect(isBoolean(function(){})).toBe(false);
    expect(isBoolean(() => {})).toBe(false);
    expect(isBoolean(new Function())).toBe(false);
    expect(isBoolean(new Date())).toBe(false);
    expect(isBoolean(/a/)).toBe(false);
    expect(isBoolean(new RegExp('a'))).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean(null)).toBe(false);
});