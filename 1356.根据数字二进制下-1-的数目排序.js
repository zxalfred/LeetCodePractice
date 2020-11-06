/*
 * @lc app=leetcode.cn id=1356 lang=javascript
 *
 * [1356] 根据数字二进制下 1 的数目排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
  const map = new Map()
  const calcBits = (num) => {
    if (map.has(num)) {
      return map.get(num)
    }
    let count = 0
    let i = num
    while(i) {
      if (i & 1 === 1) {
        count++
      }
      i = i >> 1
    }
    map.set(num, count)
    return count
  }

  return arr.sort((a, b) => {
    const diff = calcBits(a) - calcBits(b)
    if (diff !== 0) return diff
    return a - b
  })
};
// @lc code=end

