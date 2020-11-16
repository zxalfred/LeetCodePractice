/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  const arr = people.sort((a, b) => a[0] - b[0])
  const len = people.length
  const result = new Array(len)

  for (let i = 0; i < len; i++) {
    const [height, countTarget] = arr[i]
    let count = 0
    for (let j = 0; j < len; j++) {
      if (count === countTarget && !result[j]) {
        result[j] = arr[i]
        break
      }
      if (!result[j] || result[j][0] >= height) {
        count++
      }
    }
  }

  return result
};

// @lc code=end

