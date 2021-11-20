/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
  let set1 = new Set(nums1)
  let set2 = new Set(nums2)
  const set3 = new Set()
  if (set1.size > set2.size) {
    [set1, set2] = [set2, set1]
  }
  for (const item of set1) {
    if (set2.has(item)) {
      set3.add(item)
    }
  }
  return [...set3]
}
// @lc code=end
