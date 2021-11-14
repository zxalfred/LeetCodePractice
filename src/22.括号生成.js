/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  const result = []
  const l = 2 * n
  const gen = (cur, left, right) => {
    if (cur.length === l) {
      result.push(cur)
      return
    }

    if (left < n) {
      gen(`${cur}(`, left + 1, right)
    }
    if (right < left) {
      gen(`${cur})`, left, right + 1)
    }
  }

  gen('', 0, 0)

  return result
}
// @lc code=end
