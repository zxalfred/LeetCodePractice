/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'

  const m = num1.length
  const n = num2.length
  const ansArr = new Array(m + n).fill(0)

  for (let i = m - 1; i >= 0; i--) {
    const x = parseInt(num1[i])
    for (let j = n - 1; j >= 0; j--) {
      const y = parseInt(num2[j])
      ansArr[i + j + 1] += x * y
    }
  }

  for (let i = m + n - 1; i > 0; i--) {
    ansArr[i - 1] += ~~(ansArr[i] / 10)
    ansArr[i] %= 10
  }

  let index = ansArr[0] === 0 ? 1 : 0
  const ans = []
  while (index < m + n) {
    ans.push(ansArr[index])
    index++
  }

  return ans.join('').toString()
}

// @lc code=end
