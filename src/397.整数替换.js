/*
 * @lc app=leetcode.cn id=397 lang=javascript
 *
 * [397] 整数替换
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const integerReplacement = function (n) {
  if (n === 1) return 0
  let x = n
  let result = 0
  while (x > 1) {
    if ((x & 1) === 0) {
      x /= 2
      result++
    } else {
      const y = (x - 1) / 2
      if ((y & 1) === 0 || y === 1) {
        x = y
        result += 2
      } else {
        x = y + 1
        result += 2
      }
    }
  }

  return result
}

// @lc code=end
