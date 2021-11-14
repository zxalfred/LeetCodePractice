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
  if (nums.length < 3) return []
  const result = []
  nums.sort((a, b) => a - b)
  const l = nums.length
  let k = 0
  while (k <= l - 2) {
    const base = nums[k]
    const target = -base
    let i = k + 1
    let j = l - 1
    while (i < j) {
      const left = nums[i]
      const right = nums[j]
      const sum = left + right
      if (sum > target) {
        j--
      } else if (sum < target) {
        i++
      } else {
        result.push([nums[k], nums[i], nums[j]])
        i++
        j--
        while (nums[i] === left) {
          i++
        }
        while (nums[j] === right) {
          j--
        }
      }
    }

    k++
    while (nums[k] === base) {
      k++
    }
  }

  return result
}

// @lc code=end

