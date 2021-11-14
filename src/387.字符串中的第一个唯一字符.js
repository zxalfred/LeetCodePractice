/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  const arr = new Array(26).fill(0)
  const l = s.length
  for (let i = 0; i < l; i++) {
    const index = s[i].charCodeAt(0) - 97
    arr[index] = arr[index] + 1
  }
  for (let i = 0; i < l; i++) {
    const index = s[i].charCodeAt(0) - 97
    if (arr[index] === 1) return i
  }
  return -1
}
// @lc code=end
