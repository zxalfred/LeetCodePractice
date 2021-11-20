/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = function (bills) {
  const map = new Map([[5, 0], [10, 0]])

  for (let i = 0; i < bills.length; i++) {
    const count5 = map.get(5)
    if (bills[i] === 5) {
      map.set(5, count5 + 1)
    } else if (bills[i] === 10) {
      if (count5 === 0) return false
      map.set(10, map.get(10) + 1)
      map.set(5, count5 - 1)
    } else {
      const count10 = map.get(10)
      if (count10 > 0 && count5 > 0) {
        map.set(10, count10 - 1)
        map.set(5, count5 - 1)
      } else if (count5 > 2) {
        map.set(5, count5 - 3)
      } else return false
    }
  }

  return true
}

// @lc code=end
