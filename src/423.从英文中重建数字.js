/*
 * @lc app=leetcode.cn id=423 lang=javascript
 *
 * [423] 从英文中重建数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const originalDigits = function (s) {
  const map = new Map()
  const resultMap = new Map()
  const arr = [
    ['z', 'zero', 0],
    ['x', 'six', 6],
    ['g', 'eight', 8],
    ['h', 'three', 3],
    ['s', 'seven', 7],
    ['t', 'two', 2],
    ['r', 'four', 4],
    ['f', 'five', 5],
    ['o', 'one', 1],
  ]
  for (const letter of s) {
    map.set(letter, (map.get(letter) || 0) + 1)
  }
  for (const item of arr) {
    const num = map.get(item[0])
    if (num) {
      for (const letter of item[1]) {
        map.set(letter, map.get(letter) - num)
      }
      resultMap.set(item[2], num)
    }
  }
  resultMap.set(9, map.get('i'))
  let result = ''
  for (let i = 0; i < 10; i++) {
    const num = resultMap.get(i)
    for (let j = 0; j < num; j++) {
      result += String(i)
    }
  }

  return result
}

// @lc code=end
