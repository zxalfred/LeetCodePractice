/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let count = 0
  let end = -1
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      end = i
      break
    }
  }
  if (end === -1) return 0
  for (let i = 0; i <= end; i++) {
    const val = s[i]
    if (val === ' ') {
      count = 0
    } else {
      count++
    }
  }

  return count
};

console.log(lengthOfLastWord("a   "))
// @lc code=end

