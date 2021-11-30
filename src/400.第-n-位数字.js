/*
 * @lc app=leetcode.cn id=400 lang=javascript
 *
 * [400] 第 N 位数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const findNthDigit = function (n) {
  let sum = 0
  let i = 1
  while (sum < n) {
    sum += i * 9 * (10 ** (i - 1))
    i++
  }
  i--
  sum -= (i * 9 * (10 ** (i - 1)))
  const index = n - sum - 1
  const num = ~~(index / i) + (10 ** (i - 1))
  const digit = index % i

  return String(num)[digit]
}

// @lc code=end
