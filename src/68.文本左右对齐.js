/*
 * @lc app=leetcode.cn id=68 lang=javascript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  const result = []
  let currRow = []
  let currLen = 0
  for (let i = 0; i < words.length; i++) {
    const item = words[i]
    const more = maxWidth - (currLen + item.length + currRow.length)
    if (!currLen || more >= 0) {
      currRow.push(item)
      currLen += item.length
    } else {
      const every = ~~((maxWidth - currLen) / (currRow.length - 1))
      let left = (maxWidth - currLen) % (currRow.length - 1)
      let str = currRow[0]
      for (let j = 1; j < currRow.length; j++) {
        if (left) {
         str += ' ' 
         left--
        }
        str = str + ' '.repeat(every) + currRow[j]
      }
      if (currRow.length === 1) {
        str = str.padEnd(maxWidth)
      }
      result.push(str)
      currLen = item.length
      currRow = [item]
    }
  }
  result.push(currRow.join(' ').padEnd(maxWidth))

  return result
};

// @lc code=end

