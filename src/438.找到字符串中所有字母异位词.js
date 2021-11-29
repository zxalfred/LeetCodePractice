/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const getIndex = (s) => s.charCodeAt(0) - 97
const findAnagrams = function (s, p) {
  const { length: sLen } = s
  const { length: pLen } = p
  if (sLen < pLen) return []
  const res = []
  const sArr = new Array(26).fill(0)
  const pArr = new Array(26).fill(0)
  for (let i = 0; i < pLen; i++) {
    sArr[getIndex(s[i])]++
    pArr[getIndex(p[i])]++
  }
  const pArrStr = pArr.toString()
  if (sArr.toString() === pArrStr) res.push(0)

  for (let i = 1; i <= sLen - pLen; i++) {
    sArr[getIndex(s[i - 1])]--
    sArr[getIndex(s[i + pLen - 1])]++
    if (sArr.toString() === pArrStr) {
      res.push(i)
    }
  }

  return res
}

// @lc code=end
