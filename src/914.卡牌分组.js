/*
 * @lc app=leetcode.cn id=914 lang=javascript
 *
 * [914] 卡牌分组
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
const gcd = (a, b) => {
  if (b === 0) return a
  return gcd(b, a % b)
}

const hasGroupsSizeX = function (deck) {
  const map = new Map()

  for (const item of deck) {
    const val = map.get(item)
    if (val) {
      map.set(item, val + 1)
    } else {
      map.set(item, 1)
    }
  }

  const val = Array.from(map.values()).reduce((a, b) => gcd(a, b))

  return val > 1
}
// @lc code=end
