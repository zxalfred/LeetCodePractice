/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let count = 0
  const l = flowerbed.length
  let i = 0
  while (i < l) {
    if (flowerbed[i] !== 1) {
      if (flowerbed[i + 1] && flowerbed[i + 1] == 1) {
        i += 3
      } else {
        count++
        if (count >= n) {
          return true
        }
        i += 2
      }
    } else {
     i += 2 
    }
  }
  return count >= n
};

// @lc code=end

