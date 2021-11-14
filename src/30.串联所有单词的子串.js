/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = function (s, words) {
  if (!words.length) return []
  const map = new Map()
  const sLen = s.length
  const wordLen = words[0].length
  const windowSpan = wordLen * words.length
  const result = []
  for (const item of words) {
    const val = map.get(item)
    if (val) {
      map.set(item, val + 1)
    } else {
      map.set(item, 1)
    }
  }

  for (let i = 0; i < sLen - wordLen + 1; i++) {
    const nowMap = new Map(map)
    let flag = true
    for (let j = i; j < i + windowSpan;) {
      const item = s.substr(j, wordLen)
      const val = nowMap.get(item)
      if (!val || val === 0) {
        flag = false
        break
      }
      nowMap.set(item, val - 1)
      j += wordLen
    }
    if (flag) result.push(i)
  }

  return result
}
// @lc code=end
