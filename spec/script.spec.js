const returnProduct = require("../src/script.js");

test('multiplies 10 x 3 to equal 30', () => {
  expect(returnProduct(10, 3)).toBe(30);
});