/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
  let i = 0
  let j = numbers.length - 1

  while (i < j) {
    const sum = numbers[i] + numbers[j]
    if (sum === target) return [i + 1, j + 1]
    if (sum > target) j--
    else i++
  }

  return null
}
// @lc code=end
