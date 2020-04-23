/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcd = (a, b) => {
  if (b === 0) return a
  return gcd(b, a % b)
}

var gcdOfStrings = function(str1, str2) {
  const l1 = str1.length
  const l2 = str2.length

  const a = gcd(l1, l2)
  let slice = ''

  for (let i = 0; i < l1; i += a){
    if (!slice) {
      slice = str1.substr(i, a)
    } else if (str1.substr(i, a) !== slice) {
      return ''
    }
  }

  for (let i = 0; i < l2; i += a){
    if (str2.substr(i, a) !== slice) {
      return ''
    }
  }

  return slice
};
// @lc code=end

