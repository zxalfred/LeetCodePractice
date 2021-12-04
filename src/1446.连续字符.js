/*
 * @lc app=leetcode.cn id=1446 lang=javascript
 *
 * [1446] 连续字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const maxPower = function (s) {
  let result = 1
  let prev
  let nowLen = 0
  for (const letter of s) {
    if (letter !== prev) {
      prev = letter
      nowLen = 1
    } else {
      nowLen++
      result = Math.max(result, nowLen)
    }
  }

  return result
}

// @lc code=end
