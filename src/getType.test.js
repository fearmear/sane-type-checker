var getType = require('./getType');

test('getType returns \'array\' for [] and new Array()', () => {
    expect(getType([])).toBe('array');
    expect(getType(new Array())).toBe('array');
});

test('getType returns \'boolean\' for true and new Boolean()', () => {
    expect(getType(true)).toBe('boolean');
    expect(getType(new Boolean())).toBe('boolean');
});

test('getType returns \'date\' for new Date()', () => {
    expect(getType(new Date())).toBe('date');
});

test('getType returns \'function\' for function(){}, () => {} and new Function()', () => {
    expect(getType(function(){})).toBe('function');
    expect(getType(() => {})).toBe('function');
    expect(getType(new Function())).toBe('function');
});

test('getType returns \'null\' for null', () => {
    expect(getType(null)).toBe('null');
});

test('getType returns \'number\' for 1 and new Number(1)', () => {
    expect(getType(1)).toBe('number');
    expect(getType(new Number(1))).toBe('number');
});

test('getType returns \'object\' for {} and new Object()', () => {
    expect(getType({})).toBe('object');
    expect(getType(new Object())).toBe('object');
});

test('getType returns \'regexp\' for /a/ and new RegExp(\'a\')', () => {
    expect(getType(/a/)).toBe('regexp');
    expect(getType(new RegExp('a'))).toBe('regexp');
});

test('getType returns \'string\' for \'a\' and new String(\'a\')', () => {
    expect(getType('a')).toBe('string');
    expect(getType(new String('a'))).toBe('string');
});

test('getType returns \'undefined\' for undefined', () => {
    expect(getType()).toBe('undefined');
    expect(getType(undefined)).toBe('undefined');
});
