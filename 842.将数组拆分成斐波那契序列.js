/*
 * @lc app=leetcode.cn id=842 lang=javascript
 *
 * [842] 将数组拆分成斐波那契序列
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function(S) {
  const max = 2147483647
  const backTrack = (arr, index) => {
    if (index >= S.length) {
      if (arr.length > 2) {
        return arr
      }
      return
    }
    for (let i = index; i < S.length; i++) {
      const str = S.substring(index, i + 1)
      if (str.length > 1 && str[0] === '0') break
      const item = Number(str)
      if (item > max) break
      const len = arr.length
      if (len > 1) {
        if (arr[len - 1] + arr[len - 2] === item) {
          const res = backTrack([...arr, item],i + 1)
          if (res) return res
          break
        }
      } else {
        const res = backTrack([...arr, item],i + 1)
        if (res) return res
      }
    }
  }

  return backTrack([], 0) || []
};

// @lc code=end

