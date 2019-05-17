/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let signFlag;
  let result = 0;
  const resultArr = [];
  const maxVal = 2147483647
  const minVal = -2147483648;
  for (let i = 0; i < str.length; i++) {
    if ((str[i] === '-' || str[i] === '+') 
      && !resultArr.length
      && signFlag === undefined
    ) {
      signFlag = str[i] === '+' ? 1 : -1;
    } else if (str[i] !== ' ' && !Number.isNaN(Number(str[i]))) {
      resultArr.push(str[i]);
    } else if (str[i] === ' ' && signFlag === undefined && !resultArr.length) {
      continue;
    } else {
      break;
    }
  }
  if (!resultArr.length) return 0;
  signFlag = signFlag || 1;
  result = signFlag * Number(resultArr.join(''));
  result = result > maxVal ? maxVal : result;
  result = result < minVal ? minVal : result;
  return result;
};
