/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const result = []
  nums.sort((a, b) => a - b)
  let targetIndex = 0
  while (targetIndex < nums.length - 1) {
    const target = -nums[targetIndex]
    let head = targetIndex + 1
    let tail = nums.length - 1
    while (head < tail) {
      const sum = nums[head] + nums[tail]
      if (sum === target) {
        const a = nums[head]
        const b = nums[tail]
        result.push([-target, a, b])
        // 剔除左边重复项
        while (nums[head] === a) {
          head++
        }
        // 剔除右边重复项
        while (nums[tail] === b) {
          tail--
        }
      } else if (sum > target) {
        tail--
      } else {
        head++
      }
    }
    // 剔除头部重复项
    while (nums[targetIndex] === -target) {
      targetIndex++
    }
  }

  return result
};

// @lc code=end

