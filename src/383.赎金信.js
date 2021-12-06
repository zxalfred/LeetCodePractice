/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const rMemo = new Array(26).fill(0)
  const mMemo = new Array(26).fill(0)
  for (const letter of ransomNote) {
    rMemo[letter.charCodeAt(0) - 97]++
  }
  for (const letter of magazine) {
    mMemo[letter.charCodeAt(0) - 97]++
  }
  for (let i = 0; i < 26; i++) {
    if (rMemo[i] && rMemo[i] > mMemo[i]) return false
  }
  return true
};
// @lc code=end

