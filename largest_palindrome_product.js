/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  var palindromes = [];

  if(typeof digits !== "number") {

    return TypeError("Invalid input");
  }

  if(isNaN(digits)) {

    return TypeError("Invalid input");
  }

  palindromes = generatePalindromes(digits);

  findLargestPalindromeFactors(digits);

  function findLargestPalindromeFactors(digits) {

    var foreArray = [];

    for(var i = 0; i < digits; i++) {

      foreArray.push(9);
    }

    var minArray = [1];

    for(var i = 0; i < digits-1; i++) {

      minArray.push(0);
    }

    var minSubArrayNumber = parseInt(minArray.join(""));
    var maxSubArrayNumber = parseInt(foreArray.join(""))
    var palindromeInteger;

    var found = false;

    for(var i = 0; i < palindromes.length; i++) {

      palindromeInteger = parseInt(palindromes[i].join(""));

      if(palindromeHasIntegerFactors(palindromeInteger, maxSubArrayNumber, minSubArrayNumber)) {

        found = true;
        break;
      }
    }

    return found;
  };

  function generatePalindromes(digits) {

    var newPalindromes = [];
    var foreArray = [];

    for(var i = 0; i < digits; i++) {

      foreArray.push(9);
    }

    var minArray = [1];

    for(var i = 0; i < digits-1; i++) {

      minArray.push(0);
    }

    var maxLength = Math.pow(parseInt(foreArray.join("")), 2).toString().length;

    var minSubArrayNumber = parseInt(minArray.join(""));
    var maxSubArrayNumber = parseInt(foreArray.join(""));

    var palindromeArray;

    if(maxLength%2) { //odd

      for(var i = 9; i > -1; i--) {

        for(var j = maxSubArrayNumber; j > minSubArrayNumber; j--) {

          palindromeArray = j.toString().split("");
          palindromeArray.push(i);
          palindromeArray = palindromeArray.concat(j.toString().split("").reverse());

          newPalindromes.push(palindromeArray);
        }
      }



    } else { //even

      for(var j = maxSubArrayNumber; j > minSubArrayNumber; j--) {

          palindromeArray = j.toString().split("");
          palindromeArray = palindromeArray.concat(j.toString().split("").reverse());

          newPalindromes.push(palindromeArray);
        }

    }

    return newPalindromes;
  };

  function palindromeHasIntegerFactors(palindrome, maxFactor, minFactor) {

    for(var i = minFactor; i <= Math.ceil(Math.sqrt(palindrome)); i++) {

      if(palindrome%i === 0) {

        if((palindrome / i) <= maxFactor) {

          factor_0 = i;
          factor_1 = palindrome/i;
          palindromeNumber = palindrome;

          return true;
        }
      }
    }

    return false;
  };

  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};