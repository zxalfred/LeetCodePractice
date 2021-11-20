/*
 * @lc app=leetcode.cn id=1111 lang=javascript
 *
 * [1111] 有效括号的嵌套深度
 */

// @lc code=start
/**
 * @param {string} seq
 * @return {number[]}
 */
const maxDepthAfterSplit = function (seq) {
  let leftNum = 0
  const result = []
  for (let i = 0, l = seq.length; i < l; i++) {
    if (seq[i] === ')') leftNum--
    result.push(leftNum % 2)
    if (seq[i] !== ')') leftNum++
  }
  return result
}
// @lc code=end
