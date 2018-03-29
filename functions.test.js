const { returnTwo, greeting, add } = require('./functions');

test('returnTwo should return the number 2', () => {
    expect(returnTwo()).toEqual(2);
})

test("greeting(name) should return 'Hello, Name'.", () => {
    expect(greeting("James")).toEqual("Hello, James");
    expect(greeting("Jill")).toEqual("Hello, Jill");
});

test("add() should return the sum of 2 passed in integers", () => {
    expect(add(1, 2)).toEqual(3);
    expect(add(3, 5)).toEqual(8);
    expect(add(0.1, 0.2)).toEqual(0);
})