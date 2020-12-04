/*
 * @lc app=leetcode.cn id=659 lang=javascript
 *
 * [659] 分割数组为连续子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  const map = new Map()
  if (!map.has(x)) {
    map.set(x, new MinPriorityQueue())
  }
  for (const x of nums) {
    if (map.has(x - 1)) {
      const prevLength = map.get(x - 1).dequeue()['priority']
      if (map.get(x - 1).isEmpty()) {
        map.delete(x - 1)
      }
      map.get(x).enqueue(x, prevLength + 1)
    } else {
      map.get(x).enqueue(x, 1)
    }
  }
  for (const [key, value] of map.entries()) {
    if (value.front()['priority'] < 3) {
      return false
    }
  }
  return true
};
// @lc code=end

