/*
 * @lc app=leetcode.cn id=1160 lang=javascript
 *
 * [1160] 拼写单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
const countCharacters = function (words, chars) {
  const a = new Array(26).fill(0)
  let count = 0

  for (let i = 0; i < chars.length; i++) {
    const index = chars.charCodeAt(i) - 97
    a[index]++
  }

  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    const b = [...a]
    let c = true
    for (let j = 0; j < word.length; j++) {
      const index = word.charCodeAt(j) - 97
      if (b[index] > 0) {
        b[index]--
      } else {
        c = false
      }
    }
    if (c) count += word.length
  }

  return count
}
// @lc code=end
