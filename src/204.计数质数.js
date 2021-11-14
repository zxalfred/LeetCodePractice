/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
  if (n <= 2) return 0
  let count = 1
  for (let i = 3; i < n; i++) {
    const mid = Math.sqrt(i)
    let isPrime = true
    for (let j = 2; j <= mid; j++) {
      if (i % j === 0) {
        isPrime = false
        break
      }
    }
    if (isPrime) count++
  }

  return count
}
// @lc code=end
