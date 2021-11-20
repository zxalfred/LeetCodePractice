/*
 * @lc app=leetcode.cn id=836 lang=javascript
 *
 * [836] 矩形重叠
 */

// @lc code=start
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
const isRectangleOverlap = function (rec1, rec2) {
  return ((Math.max(rec1[2], rec2[2]) - Math.min(rec1[0], rec2[0]))
  < ((rec1[2] - rec1[0]) + (rec2[2] - rec2[0])))
  && ((Math.max(rec1[3], rec2[3]) - Math.min(rec1[1], rec2[1]))
  < ((rec1[3] - rec1[1]) + (rec2[3] - rec2[0])))
}
// @lc code=end
