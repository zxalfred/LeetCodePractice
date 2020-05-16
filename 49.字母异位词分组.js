/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  if (!strs.length) return []
  const map = new Map()
  const result = []
  for (const item of strs) {
    const arr = new Array(26).fill(0)
    const { length } = item
    for (let i = 0; i < length; i++) {
      const pos = item.charCodeAt(i) - 97
      arr[pos] = arr[pos] + 1
    }
    const str = arr.join(',')
    const val = map.get(str)
    if (val === undefined) {
      map.set(str, result.length)
      result.push([item])
    } else {
      result[val].push(item)
    }
  }

  return result
}
// @lc code=end

