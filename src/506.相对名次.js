/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
const findRelativeRanks = function (score) {
  const arr = [...score].sort((a, b) => b - a)
  const map = new Map()
  const medalMap = {
    0: 'Gold Medal',
    1: 'Silver Medal',
    2: 'Bronze Medal',
  }
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i in medalMap ? medalMap[i] : String(i + 1))
  }

  return score.map((i) => map.get(i))
}

// @lc code=end
