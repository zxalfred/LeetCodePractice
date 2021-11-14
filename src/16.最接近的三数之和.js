/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let minDiff = Infinity
  let result
  nums = nums.sort((a, b) => a - b)

  let index = 0
  while (index < nums.length - 1) {
    const indexVal = nums[index]
    let head = index + 1
    let tail = nums.length - 1
    while (head < tail) {
      const sum = nums[head] + nums[tail] + indexVal
      const diff = Math.abs(sum - target)
      if (diff < minDiff) {
        result = sum
        minDiff = diff
      }
      if (sum === target) {
        return sum
      } else if (sum > target) {
        tail--
      } else {
        head++
      }
    }
    // 剔除头部重复项
    while (nums[index] === indexVal) {
      index++
    }
  }

  return result
};
// @lc code=end

