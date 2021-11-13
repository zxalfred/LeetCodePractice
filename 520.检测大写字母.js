/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  if (word.length === 1) return true
  const isUppercase = (s) => {
    return s.charCodeAt() < 97
  }
  
  let secondUppercase = isUppercase(word[1])
  if (!isUppercase(word[0]) && secondUppercase) return false

  for (let i = 2; i < word.length; i++) {
    if (isUppercase(word[i]) !== secondUppercase) return false
  }

  return true
};

// @lc code=end

