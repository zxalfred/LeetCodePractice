/*
 * @lc app=leetcode.cn id=748 lang=javascript
 *
 * [748] 最短补全词
 */

// @lc code=start
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
const shortestCompletingWord = function (licensePlate, words) {
  const map = {}
  let result = ''
  let count = 0
  for (const item of licensePlate) {
    const val = item.toLocaleLowerCase()
    const charCode = val.charCodeAt(0)
    if (charCode >= 97 && charCode <= 122) {
      count++
      map[val] = (map[val] || 0) + 1
    }
  }

  for (const word of words) {
    if (word.length < count) continue
    const newMap = { ...map }
    for (const letter of word) {
      if (letter in newMap) {
        newMap[letter]--
        if (newMap[letter] === 0) delete newMap[letter]
      }
      if (Object.keys(newMap).length === 0) {
        if (!result || result.length > word.length) {
          result = word
        }
        break
      }
    }
  }

  return result
}

// @lc code=end
