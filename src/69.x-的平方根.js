/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  if (x === 0) return 0
  if (x <= 3) return 1
  const help = function (target, left, right) {
    if (left - right <= 1) {
      return left ** 2 <= target ? left : right
    }
    const middle = (left + right) >> 1
    const val = middle ** 2
    if (val === target) {
      return middle
    } if (val > target) {
      return help(target, middle, right)
    }
    return help(target, left, middle)
  }

  return help(x, x >> 1, 1)
}
// @lc code=end
