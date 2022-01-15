/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
  const set = new Set(nums)

  let res = 0
  for (let num of set) {
    if (!set.has(num - 1)) {
      let temp = 1
      while (set.has(++num)) {
        temp++
      }
      res = Math.max(temp, res)
    }
  }

  return res
}
// @lc code=end
