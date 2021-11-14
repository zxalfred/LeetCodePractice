/*
 * @lc app=leetcode.cn id=1720 lang=javascript
 *
 * [1720] 解码异或后的数组
 */

// @lc code=start
/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
  const l = encoded.length + 1
  const arr = new Array(l)
  arr[0] = first
  for (let i = 1; i < l; i++) {
    arr[i] = arr[i - 1] ^ encoded[i - 1]
  }
  return arr
};
// @lc code=end

