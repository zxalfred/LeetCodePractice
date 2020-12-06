/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let result = [[1]]

  for (let i = 1; i < numRows; i++) {
    const currArr = [1]
    const end = (i - 1) >> 1
    for (let j = 1; j <= end; j++) {
      currArr[j] = result[i - 1][j - 1] + (result[i - 1][j] || 0)
    }
    const temp = [...currArr]
    if (i % 2 === 0) {
      temp.push(2 * result[i - 1][i / 2])
    }

    result.push(temp.concat(currArr.reverse()))
  }

  return result
};

console.log(generate(1))

// @lc code=end

