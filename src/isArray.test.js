var isArray = require('./isArray');

test('isArray returns true for [] and new Array()', () => {
    expect(isArray([])).toBe(true);
    expect(isArray(new Array())).toBe(true);
});

test('isArray returns false for every other type', () => {
    expect(isArray({})).toBe(false);
    expect(isArray(new Object())).toBe(false);
    expect(isArray('abc')).toBe(false);
    expect(isArray(new String('abc'))).toBe(false);
    expect(isArray(1)).toBe(false);
    expect(isArray(new Number(1))).toBe(false);
    expect(isArray(function(){})).toBe(false);
});

test('124', function(){
    
    expect(isArray(() => {})).toBe(false);
    expect(isArray(new Function())).toBe(false);
    expect(isArray(true)).toBe(false);
    expect(isArray(new Boolean())).toBe(false);
    expect(isArray(new Date())).toBe(false);
    expect(isArray(/a/)).toBe(false);
    expect(isArray(new RegExp('a'))).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray(null)).toBe(false);
});