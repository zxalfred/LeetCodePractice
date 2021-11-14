/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  if (n <= 2) return n
  let i = 1
  let j = 2
  while (n > 2) {
    [i, j] = [j, i + j]
    n--
  }
  return j
}

// @lc code=end
