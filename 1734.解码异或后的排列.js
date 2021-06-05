/*
 * @lc app=leetcode.cn id=1734 lang=javascript
 *
 * [1734] 解码异或后的排列
 */

// @lc code=start
/**
 * @param {number[]} encoded
 * @return {number[]}
 */
var decode = function(encoded) {
  let a = 0
  for (let i = 1; i < encoded.length; i+=2) {
    a ^= encoded[i]
  }
  let all = 0
  for (let i = 1; i <= encoded.length + 1; i++) {
    all ^= i
  }
  const first = a ^ all
  const result = [first]
  let prev = first
  for (const item of encoded) {
    const curr = prev ^ item
    result.push(curr)
    prev = curr
  }
  return result
};

// @lc code=end

