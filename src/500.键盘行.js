/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (words) {
  const firstRow = new Set(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'])
  const secondRow = new Set(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'])
  const thirdRow = new Set(['z', 'x', 'c', 'v', 'b', 'n', 'm'])
  const result = []
  for (const item of words) {
    let row
    let flag = true
    const word = item.toLowerCase()
    for (const letter of word) {
      let nowRow
      if (firstRow.has(letter)) nowRow = 0
      else if (secondRow.has(letter)) nowRow = 1
      else nowRow = 2
      if (row === undefined) row = nowRow
      else if (nowRow !== row) {
        flag = false
        break
      }
    }
    if (flag) result.push(item)
  }

  return result
}

// @lc code=end
