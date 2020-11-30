const f = require("./start.js")

test('My first test', () => {//passed
    expect(f(5)).toBe(2.44);
});
test('My second test', () => {//passed
    expect(f(10)).toBe(3.26);
});
test('My second test', () => {//failed
    expect(f(10)).toBe(3.25);
});
test('My second test', () => {//passed
    expect(f(10)).not.toBe(3.25);
});