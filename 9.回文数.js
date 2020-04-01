/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  x = String(x)
  if (x < 0) return false

  let i = 0
  let j = x.length - 1

  while (i < j) {
    if (x[i] !== x[j]) return false
    i++
    j--
  }

  return true
};
// @lc code=end

