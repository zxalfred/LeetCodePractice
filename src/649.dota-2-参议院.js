/*
 * @lc app=leetcode.cn id=649 lang=javascript
 *
 * [649] Dota2 参议院
 */

// @lc code=start
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
  const map = new Map([['R', []], ['D', []]])
  const memo = new Array(senate.length).fill(true) // 使用过后为 false
  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === 'R') {
      map.get('R').push(i)
    } else {
      map.get('D').push(i)
    }
  }

  while (true) {
    for (let i = 0; i < senate.length; i++) {
      if (!memo[i]) continue
      const item = senate[i]
      const indexArr = map.get(item === 'R' ? 'D' : 'R')
      if (indexArr.length <= 1) {
        return item === 'R' ? 'Radiant' : 'Dire'
      }
      let index = -1
      for (let j = 0; j < indexArr.length; j++) {
        if (indexArr[j] > i) {
          index = j
          break
        }
      }
      if (index !== -1) {
        memo[indexArr[index]] = false
        indexArr.splice(index, 1)
      } else {
        memo[indexArr[0]] = false
        indexArr.shift()
      }
    }
  }
};


// @lc code=end

