/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const isNeg = x < 0;
  let result = 0;
  x = Math.abs(x);
  while(x) {
    const lastNum = x % 10;
    result *= 10;
    result += lastNum;
    x = ~~(x / 10);
  }
  result = isNeg ? -result : result;
  if (result > Math.pow(2, 31) -1 || result < -Math.pow(2, 31)) {
    return 0;
  }
  return result;
};