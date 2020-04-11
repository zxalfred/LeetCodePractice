/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

// 滑动窗口
// 利用 set 判断新的字符是否存在在窗口中
// 若存在，不断移动左边界，直至不存在
// 时间复杂度 O(2n)
// var lengthOfLongestSubstring = function(s) {
//   const l = s.length
//   if (l< 2) return s.length
  
//   let i = 0
//   let j = 0
//   let result = 0
//   const set = new Set()

//   while (i < l && j < l) {
//     if (!set.has(s[j])) {
//       // 若 s[j] 不存在，则将窗口右边右移
//       set.add(s[j])
//       result = Math.max(result, j - i + 1)
//       j++
//     } else {
//       // 若 s[j] 存在，则将窗口左边右移
//       // 直至 s[j] 不存在
//       set.delete(s[i])
//       i++
//     }
//   }

//   return result
// };

// 滑动窗口
// 利用 map 记下字符出现的位置
// 若新字符存在，直接移动左边界到需要的地方，而不是一次次移动
// // 时间复杂度 O(n)
var lengthOfLongestSubstring = function(s) {
  let result = 0
  const l = s.length
  const map = new Map()

  for (let i = 0, j = 0; j < l; j++) {
    if (map.has(s[j])) {
      i = Math.max(i, map.get(s[j]) + 1)
    }
    result = Math.max(result, j - i + 1)
    map.set(s[j], j)
  }

  return result
}
// @lc code=end

