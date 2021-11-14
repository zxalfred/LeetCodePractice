/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const wiggleMaxLength = function (nums) {
  if (!nums.length) return 0
  if (nums.length <= 2) return 1
  let count = 0
  let flag = 0
  for (let i = 1; i < nums.length; i++) {
    const diff = (nums[i] - nums[i - 1]) * (flag || 1)
    if (diff === 0) continue
    if (!flag) {
      flag = diff > 0 ? 1 : -1
      count++
    } else if (diff < 0) {
      flag = -flag
      count++
    }
  }

  return count + 1
}

// @lc code=end
