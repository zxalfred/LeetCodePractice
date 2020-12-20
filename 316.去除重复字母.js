/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
  const l = s.length
  if (l < 2) return s
  const stack = [s[0]]
  const map = new Map()
  const set = new Set([s[0]])
  for (let i = l - 1; i >= 0; i--) {
    if (map.get(s[i]) === undefined) {
      map.set(s[i], i)
    }
  }
  for (let i = 1; i < l; i++) {
    if (set.has(s[i])) continue
    let prev = stack[stack.length - 1]
    const nowCode = s[i].charCodeAt(0)
    if (nowCode > prev.charCodeAt(0)) {
      stack.push(s[i])
      set.add(s[i])
      continue
    }
    while (
      prev
      && prev.charCodeAt(0) > nowCode
      && map.get(prev) > i
    ) {
      set.delete(prev)
      stack.pop()
      prev = stack[stack.length - 1]
    }
    stack.push(s[i])
    set.add(s[i])
  }
  return stack.join('')
};

// @lc code=end

