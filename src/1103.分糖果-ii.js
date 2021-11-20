/*
 * @lc app=leetcode.cn id=1103 lang=javascript
 *
 * [1103] 分糖果 II
 */

// @lc code=start
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
const distributeCandies = function (candies, num_people) {
  let index = 0
  let now = 1
  let left = candies
  const arr = new Array(num_people).fill(0)

  while (left > 0) {
    if (now < left) {
      arr[index] += now
      left -= now
      now++
    } else {
      arr[index] += left
      break
    }
    index++
    if (index === num_people) {
      index = 0
    }
  }

  return arr
}
// @lc code=end
