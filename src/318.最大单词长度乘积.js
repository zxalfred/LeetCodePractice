/*
 * @lc app=leetcode.cn id=318 lang=javascript
 *
 * [318] 最大单词长度乘积
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
const maxProduct = function (words) {
  const { length: l } = words
  const arr = []
  let result = 0
  for (const word of words) {
    let val = 0
    for (let j = 0; j < word.length; j++) {
      val |= 1 << (word.charCodeAt(j) - 97)
    }
    arr.push(val)
  }

  for (let i = 0; i < l - 1; i++) {
    for (let j = i + 1; j < l; j++) {
      const a = arr[i]
      const b = arr[j]
      if ((a & b) === 0) {
        result = Math.max(result, words[i].length * words[j].length)
      }
    }
  }

  return result
}

// @lc code=end
