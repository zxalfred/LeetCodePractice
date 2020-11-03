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
  const l = nums.length
  if (l < 3) return []
  nums.sort((a, b) => a - b)
  const result = []
  for(let k = 0; k < l - 2;) {
    let i = k + 1
    let j = l - 1
    const base = nums[k]
    while (i < j) {
      const leftVal = nums[i]
      const rightVal = nums[j]
      const sum = leftVal + rightVal + base
      if (sum > 0) {
        j--
      } else if (sum < 0) {
        i++
      } else {
        result.push([nums[k], nums[i], nums[j]])
        while (nums[i] === leftVal) {
          i++
        }
        while (nums[j] === rightVal) {
          j--
        }
      }
    }
    
    while (base === nums[k]) {
      k++
    }
  }

  return result
}

// @lc code=end

