/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums: number[], target: number): [number, number] {
  const map = new Map()
  for (const i in nums) {
    const diff = target - nums[i]
    if (map.has(diff)) {
      return [map.get(diff), Number(i)]
    }
    map.set(nums[i], i)
  }
};
// @lc code=end

