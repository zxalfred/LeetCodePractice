/*
 * @lc app=leetcode.cn id=299 lang=javascript
 *
 * [299] 猜数字游戏
 */

// @lc code=start
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
const getHint = function (secret, guess) {
  let bulls = 0
  let cows = 0
  const lS = secret.length
  const lG = guess.length
  const map = new Map()
  const countedG = new Array(lG)
  for (let i = 1; i <= lS; i++) {
    if (secret[lS - i] === guess[lG - i]) {
      bulls++
      countedG[lG - i] = true
    } else {
      map.set(secret[lS - i], (map.get(secret[lS - i]) || 0) + 1)
    }
  }
  for (let i = 1; i <= lG; i++) {
    if (!map.size) break
    if (!countedG[lG - i]) {
      let count = map.get(guess[lG - i])
      if (count) {
        count--
        cows++
        map.set(guess[lG - i], count)
      }
      if (!count) {
        map.delete(guess[lG - i])
      }
    }
  }
  return `${bulls}A${cows}B`
}

// @lc code=end
