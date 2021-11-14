/*
 * @lc app=leetcode.cn id=1207 lang=javascript
 *
 * [1207] 独一无二的出现次数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const map = new Map()
  const nums = []

  for (let i = 0; i < arr.length; i++) {
    const key = arr[i]
    const val = map.get(key)
    map.set(key, val ? val + 1 : 1)
  }
  for (const value of map.values()) {
    nums.push(value)
  }
  return nums.length === new Set(nums).size
};
// @lc code=end

