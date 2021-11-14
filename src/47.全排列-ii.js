/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const len = nums.length
  if (len === 1) return [nums]
  const result = []
  const memo = new Array(len).fill(false)
  const set = new Set()

  const backtrack = (arr) => {
    if (arr.length === len) {
      const str = arr.join(',')
      if (!set.has(str)) {
        result.push(arr)
        set.add(str)
      }
      return
    }

    for (let i = 0; i < len; i++) {
      if (!memo[i]) {
        memo[i] = true
        backtrack([...arr, nums[i]])
        memo[i] = false
      }
    }
  }

  backtrack([])

  return result
};

// @lc code=end

