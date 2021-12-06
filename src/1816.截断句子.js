/*
 * @lc app=leetcode.cn id=1816 lang=javascript
 *
 * [1816] 截断句子
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const truncateSentence = function (s, k) {
  const arr = s.split(' ')
  return arr.slice(0, k).join(' ')
}
// @lc code=end
