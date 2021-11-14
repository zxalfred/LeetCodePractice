/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const tMap = new Map()
  const curMap = new Map()
  let resultL
  let resultR
  let len = Number.MAX_SAFE_INTEGER
  let validKey = 0

  for (const item of t) {
    tMap.set(item, (tMap.get(item) || 0) + 1)
  }

  for (let l = 0, r = 0; r < s.length; r++) {
    const tNum = tMap.get(s[r])
    if (tNum) {
      const cNum = (curMap.get(s[r]) || 0) + 1
      if (cNum === tNum) {
        validKey++
      }
      curMap.set(s[r], cNum)
    }
    while (validKey === tMap.size && l <= r) {
      if (r - l + 1 < len) {
        len = r - l + 1
        resultL = l
        resultR = r
      }
      const cNum = curMap.get(s[l])
      if (cNum !== undefined) {
        if (tMap.get(s[l]) === cNum) {
          validKey--
        }
        curMap.set(s[l], cNum - 1)
      }
      l++
    }
  }

  if (resultL === undefined) return ''
  return s.substring(resultL, resultR + 1)
};

// @lc code=end

