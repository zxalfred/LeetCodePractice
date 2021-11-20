/*
 * @lc app=leetcode.cn id=514 lang=javascript
 *
 * [514] 自由之路
 */

// @lc code=start
/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
const findRotateSteps = function (ring, key) {
  const ringLen = ring.length
  const keyLen = key.length
  const map = new Map()

  for (let i = 0; i < ringLen; i++) {
    !map.has(ring[i]) && map.set(ring[i], [])
    map.get(ring[i]).push(i)
  }

  const dp = [[]]
  map.get(key[0]).forEach((index) => {
    dp[0][index] = Math.min(index, ringLen - index)
  })

  for (let i = 1; i < keyLen; i++) {
    const letter = key[i]
    const positions = map.get(letter)
    dp[i] = []
    for (let j = 0; j < positions.length; j++) {
      const position = positions[j]
      dp[i][position] = Infinity
      dp[i - 1].forEach((prevStep, prevIndex) => {
        const diff = Math.abs(position - prevIndex)
        const step = Math.min(diff, ringLen - diff)
        dp[i][position] = Math.min(dp[i][position], prevStep + step)
      })
    }
  }

  let result = Infinity
  const lastDp = dp[keyLen - 1]
  for (let i = 0; i < lastDp.length; i++) {
    if (lastDp[i] !== undefined) {
      result = Math.min(result, lastDp[i])
    }
  }

  if (!isFinite(result)) {
    result = 0
  }

  return result + keyLen
}

// @lc code=end
