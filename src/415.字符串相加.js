/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function (num1, num2) {
  let i = num1.length - 1
  let j = num2.length - 1
  let carryFlag = false
  const result = []
  while (i >= 0 || j >= 0) {
    let sum = Number(i >= 0 ? num1[i] : 0) + Number(j >= 0 ? num2[j] : 0)
    if (carryFlag) {
      sum++
      carryFlag = false
    }
    if (sum > 9) {
      carryFlag = true
      sum %= 10
    }
    result.push(String(sum))
    i--
    j--
  }
  if (carryFlag) result.push('1')

  return result.reverse().join('')
}

// @lc code=end
