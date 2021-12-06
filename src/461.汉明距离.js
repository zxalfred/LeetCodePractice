/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function (x, y) {
  let i = x ^ y
  let result = 0

  while (i > 0) {
    if ((i & 1) === 1) result++
    i >>= 1
  }

  return result
}
// @lc code=end
