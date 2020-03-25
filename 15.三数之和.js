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
  
  while (nums.length >= 3) {
    const target = -nums.shift()
    let head = 0
    let tail = nums.length - 1
    while (head < tail) {
      const sum = nums[head] + nums[tail]
      if (sum === target) {
        const a = nums[head]
        const b = nums[tail]
        result.push([-target, a, b])
        while (nums[head] === a) {
          head++
        }
        while (nums[tail] === b) {
          tail--
        }
      } else if (sum > target) {
        tail--
      } else {
        head++
      }
    }
    while (nums[0] === -target) {
      nums.shift()
    }
  }

  return result
};

// @lc code=end

