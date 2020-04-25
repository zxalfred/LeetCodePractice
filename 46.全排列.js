/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const options = new Set(nums)
  const result = []

  const backtrack = (arr) => {
    if (!options.size) {
      result.push(arr)
      return
    }

    const values = [...options]
    for (const val of values) {
      options.delete(val)
      backtrack([...arr, val])
      options.add(val)
    }
  }

  backtrack([])

  return result
};
// @lc code=end

