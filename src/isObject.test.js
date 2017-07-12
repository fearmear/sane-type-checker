var isObject = require('./isObject');

test('isObject returns true for {} and new Object()', () => {
    expect(isObject({})).toBe(true);
    expect(isObject(new Object())).toBe(true);
});

test('isObject returns true for every other type', () => {
    expect(isObject([])).toBe(false);
    expect(isObject(new Array())).toBe(false);
    expect(isObject('abc')).toBe(false);
    expect(isObject(new String('abc'))).toBe(false);
    expect(isObject(1)).toBe(false);
    expect(isObject(new Number(1))).toBe(false);
    expect(isObject(function(){})).toBe(false);
    expect(isObject(() => {})).toBe(false);
    expect(isObject(new Function())).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(new Boolean())).toBe(false);
    expect(isObject(new Date())).toBe(false);
    expect(isObject(/a/)).toBe(false);
    expect(isObject(new RegExp('a'))).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(null)).toBe(false);
});