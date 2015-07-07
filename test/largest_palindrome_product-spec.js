var chai = require('chai');
var expect = chai.expect;
var findPalindromeProduct = require("../largest_palindrome_product.js");

describe("Find The Largest Palindrome Product", function () {
  it("of two 2 digit numbers", function () {
    var result = findPalindromeProduct(2);

    expect(result.palindromeNumber).to.equal(9009);

    // make sure solution contains the two factors
    expect([91, 99]).to.include(result.factor_0);
    expect([91, 99]).to.include(result.factor_1);
  });

  it("of two 3 digit numbers", function () {
    var product = findPalindromeProduct(3);

    expect(product.palindromeNumber).to.equal(906609);
  });

  it("of two 4 digit numbers", function() {

    var product = findPalindromeProduct(4);

    expect(product.palindromeNumber).to.equal(99000099);
  });

  it("of two 5 digit numbers", function() {

    var product = findPalindromeProduct(5);
  });
});