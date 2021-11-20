/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = function (s, k) {
  if (k === 1) return s
  let result = ''
  let i = 0

  while (i + k * 2 - 1 < s.length) {
    const mid = i + k
    result += s.substring(i, mid).split('').reverse().join('')
    i += k * 2
    result += s.substring(mid, i)
  }
  if (i < s.length) {
    const mid = i + k
    result += s.substring(i, mid).split('').reverse().join('')
    i = mid
  }
  if (i < s.length) {
    result += s.substring(i)
  }

  return result
}

// @lc code=end
