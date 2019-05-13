/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const arr = s.split('');
  const obj = {};
  arr.forEach((item) => {
    obj[item] = obj[item] === undefined ? false : true;
  });
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === false) return i;
  }
  return -1;
};

firstUniqChar('leetcode');
