/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length < 2) return s.length
  
  const map = new Map([
    [s[0], 0]
  ])

  let maxLength = 1
  let currRange = [0, 0]

  for (let i = 1; i < s.length; i++) {
    const val = s[i]
    const prevPos = map.get(val)
    if (prevPos === undefined) {
      currRange[1] = i
      if (currRange[1] - currRange[0] + 1 > maxLength) maxLength = currRange[1] - currRange[0] + 1
    } else {
      currRange[0] = prevPos + 1
      currRange[1] = i
      for (const [key, value] of map) {
        if (value < prevPos) {
          map.delete(key)
        }
      }
    }
    map.set(val, i)
  }

  return maxLength
};
// @lc code=end

