/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1) return true
  if (num <= 3) return false
  const help = function(target, left, right) {
    if (left - right <= 1) {
      return (left * left === target || right * right === target)
    }
    const middle = (left + right) >> 1
    const val = middle ** 2
    if (val === target) {
      return middle
    } else if (val > target) {
      return help(target, middle, right)
    } else {
      return help(target, left, middle)
    }
  }
  
  return help(num, num >> 1, 1)
};
// @lc code=end

