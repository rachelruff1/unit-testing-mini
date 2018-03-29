const { returnTwo, greeting, add, multiply, divide, subtract } = require('./functions');

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

describe("Math functions:", () => {
    test("add() should return a dynamic sum based on two number parameters.", () => {
      expect( add( 1, 2 ) ).toEqual( 3 );
      expect( add( 5, 9 ) ).toEqual( 14 );
    });
  
    test("multiply() should return a dynamic product based on two number parameters.", () => {
      expect( multiply( 1, 2 ) ).toEqual( 2 );
      expect( multiply( 5, 9 ) ).toEqual( 45 );
    });
  
    test("divide() should return a dynamic quotient based on two number parameters.", () => {
      expect( divide( 2, 1 ) ).toEqual( 2 );
      expect( divide( 9, 3 ) ).toEqual( 3 );
    });
  
    test("subtract() should return a dynamic difference based on two number parameters.", () => {
      expect( subtract( 2, 1 ) ).toEqual( 1 );
      expect( subtract( 9, 3 ) ).toEqual( 6 );
    });
  });