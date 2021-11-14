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
const isPossible = function (nums) {
  const countMap = new Map()
  const endMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    countMap.set(nums[i], (countMap.get(nums[i]) || 0) + 1)
  }

  for (let i = 0; i < nums.length; i++) {
    const item = nums[i]
    if (countMap.get(item) > 0) {
      if (endMap.get(item - 1)) {
        endMap.set(item - 1, endMap.get(item - 1) - 1)
        endMap.set(item, (endMap.get(item) || 0) + 1)
        countMap.set(item, countMap.get(item) - 1)
      } else if (countMap.get(item + 1) > 0 && countMap.get(item + 2) > 0) {
        endMap.set(item + 2, (endMap.get(item + 2) || 0) + 1)
        countMap.set(item, countMap.get(item) - 1)
        countMap.set(item + 1, countMap.get(item + 1) - 1)
        countMap.set(item + 2, countMap.get(item + 2) - 1)
      } else {
        return false
      }
    }
  }

  return true
}

console.log(isPossible([1, 2, 3, 4, 4, 5]))
// @lc code=end
