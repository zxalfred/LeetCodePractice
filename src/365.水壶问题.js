/*
 * @lc app=leetcode.cn id=365 lang=javascript
 *
 * [365] 水壶问题
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var gcd = (a, b) => {
  if (b === 0) {
    return a
  }
  return gcd(b, a % b)
}

const canMeasureWater = function (x, y, z) {
  if (x + y < z) return false
  if (x === 0 || y === 0) {
    return z === 0 || x + y === z
  }
  return z % gcd(x, y) === 0
}
// @lc code=end
