/*
 * @lc app=leetcode.cn id=1095 lang=javascript
 *
 * [1095] 山脉数组中查找目标值
 */

// @lc code=start
/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */
var findPeak = function(mountainArr, left, right) {
  const length = mountainArr.length()
  let leftVal
  let rightVal
  if (right - left === 1) {
    leftVal = mountainArr.get(left)
    rightVal = mountainArr.get(right)
    if (left - 1 >= 0 && mountainArr.get(left - 1) < leftVal && leftVal > rightVal) return left
    if (right + 1 < length && mountainArr.get(right + 1) < rightVal && leftVal < rightVal) return right
  }
  const mid = left + ((right - left) >> 1)
  const midVal = mountainArr.get(mid)
  leftVal = mountainArr.get(mid - 1)
  rightVal = mountainArr.get(mid + 1)
  if (midVal > leftVal && midVal > rightVal) {
    return mid
  }
  if (midVal > leftVal && midVal < rightVal)  {
    return findPeak(mountainArr, mid, right)
  } else {
    return findPeak(mountainArr, left, mid)
  }
}
/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    const length = mountainArr.length()
    const peakIndex = findPeak(mountainArr, 0, length - 1)
    const peakVal = mountainArr.get(peakIndex)
    if (peakVal === target) return peakIndex
    if (mountainArr.get(0) === target) return 0
    
    let left = 0
    let right = peakIndex
    while (right - left > 1) {
      const mid = left + ((right - left) >> 1)
      const midVal = mountainArr.get(mid)
      console.log(midVal)
      if (midVal === target) return mid
      if (midVal > target) {
        right = mid
      } else {
        left = mid
      }
    }
    left = peakIndex
    right = length - 1
    while (right - left > 1) {
      const mid = left + ((right - left) >> 1)
      const midVal = mountainArr.get(mid)
      if (midVal === target) return mid
      if (midVal < target) {
        right = mid
      } else {
        left = mid
      }
    }
    if (mountainArr.get(length - 1) === target) return length - 1
    return -1
};
// @lc code=end

