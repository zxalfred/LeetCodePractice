/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const getVal = (s) => {
  switch (s) {
    case 'I': return 1
    case 'V': return 5
    case 'X': return 10
    case 'L': return 50
    case 'C': return 100
    case 'D': return 500
    case 'M': return 1000
    default: return 0
  }
}
const romanToInt = function (s) {
  let res = 0
  let prev = getVal(s[0])
  for (let i = 1; i < s.length; i++) {
    const val = getVal(s[i])
    if (prev < val) {
      res -= prev
    } else {
      res += prev
    }
    prev = val
  }
  res += prev
  return res
}
// @lc code=end
