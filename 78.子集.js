/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = [[]]

  const backtrack = (arr, cur) => {
    arr.push(nums[cur])
    result.push([...arr])
    for (let i = cur + 1; i < nums.length; i++) {
      backtrack(arr, i)
      arr.pop()
    }
  }

  for (let i = 0; i < nums.length; i++) {
    backtrack([], i)
  }

  return result
};

// @lc code=end

