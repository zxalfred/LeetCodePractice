/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  if (a === '0') return b
  if (b === '0') return a

  // 使 b 的长度大于 a 的长度
  if (b.length < a.length) {
    [a, b] = [b, a]
  }
  let result = ''
  const lenDiff = b.length - a.length
  let carryBit = 0
  for (let i = b.length - 1; i >= 0; i--) {
    const j = i - lenDiff
    const sum = Number(b[i]) + Number(a[j] || 0) + carryBit
    carryBit = 0
    switch (sum) {
      case 0: {
        result = '0' + result
        break
      }
      case 1: {
        result = '1' + result
        break
      }
      case 2: {
        result = '0' + result
        carryBit = 1
        break
      }
      case 3: {
        result = '1' + result
        carryBit = 1
      }
    }
  }
  if (carryBit === 1) result = '1' + result

  return result
};

// @lc code=end

