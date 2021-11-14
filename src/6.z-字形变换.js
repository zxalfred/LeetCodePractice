/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  if (!s) return ''
  if (numRows === 1) return s
  const arr = []
  const { length } = s
  let flag = 1
  let index = 0

  for (let i = 0; i < numRows; i++) {
    arr[i] = []
  }

  for (let i = 0; i < length; i++) {
    arr[index].push(s[i])
    index += flag
    if (index === 0) {
      flag = 1
    } else if (index === numRows - 1) {
      flag = -1
    }
  }
  let result = ''
  for (const row of arr) {
    result += row.join('')
  }
  return result
}
// @lc code=end
