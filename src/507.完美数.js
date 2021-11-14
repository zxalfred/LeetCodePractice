/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
  if (num === 1) return false

  const factor = []

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      factor.push(i)
      const quotient = num / i
      if (quotient !== i) factor.push(quotient)
    }
  }

  return factor.reduce((a, b) => a + b, 1) === num
};

// @lc code=end
