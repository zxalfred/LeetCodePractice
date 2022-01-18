/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = function (nums) {
  let prev = -Infinity
  let result = 0
  let temp = 0
  for (const num of nums) {
    if (num > prev) {
      temp++
      result = Math.max(result, temp)
    } else {
      temp = 1
    }
    prev = num
  }

  return result
}

console.log(findLengthOfLCIS([1, 3, 5, 4, 2, 3, 4, 5]))
// @lc code=end
