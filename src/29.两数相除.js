/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if (!dividend) return 0
  const sign = (dividend > 0) ^ (divisor > 0)
  if (dividend > 0) dividend = -dividend
  if (divisor > 0) divisor = -divisor
  
  let result = 0
  while (dividend <= divisor) {
    let tempResult = -1
    let tempDivisor = divisor
    while (dividend <= (tempDivisor << 1)) {
      if (tempDivisor <= -1073741824) break // 注意这里！
      tempResult = tempResult << 1
      tempDivisor = tempDivisor << 1
    }
    dividend = dividend - tempDivisor
    result += tempResult
  }

  if (!sign) {
    if (result <= -2147483648) return 2147483647
    result = -result
  }

  return result
}
// @lc code=end

