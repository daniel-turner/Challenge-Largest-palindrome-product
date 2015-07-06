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

  if(typeof digits !== "number") {

    return TypeError("Invalid input");
  }

  if(isNaN(digits)) {

    return TypeError("Invalid input");
  }

  findLargestPalidromeFactors(digits);

  function findLargestPalidromeFactors(digits) {

    var arrayFore = [];
    var arrayBack = [];

    for(var i = 0; i < digits; i++) { // initialize max

      arrayFore.push(9);
      arrayBack.push(9);
    }

    var maxFore = parseInt(arrayFore.join(""), 10);
    var maxBack = parseInt(arrayBack.join(""), 10);

    arrayFore = [1];
    arrayBack = [1];

    for(var i = 0; i < digits  -1; i++) { //initialize min

      arrayFore.push(0);
      arrayBack.push(0);
    }

    var minFore = parseInt(arrayFore.join(""), 10);
    var minBack = parseInt(arrayBack.join(""), 10);

    for(var i = maxFore; i > minFore; i--) {

      for(var j = maxBack; j > minBack; j --) {

        if(isPalindrome(i * j)) {

          if(palindromeNumber < ( i * j )) {

            factor_0 = i;
            factor_1 = j;
            palindromeNumber = i * j;

            // i = minFore;
            // j = minBack;
          }
        }
      }
    }
  }

  function isPalindrome(palindromeCandidate) {

    // console.log("Testing : " + palindromeCandidate);

    var candidateArray = palindromeCandidate.toString().split("");

    if( candidateArray.join("") == candidateArray.reverse().join("")) {

      // console.log("Returning true");
      return true;
    }

    return false;
  };


  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};