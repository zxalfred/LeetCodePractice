/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var getOptions = function(input) {
  switch(input) {
    case '2': return ['a', 'b', 'c']
    case '3': return ['d', 'e', 'f']
    case '4': return ['g', 'h', 'i']
    case '5': return ['j', 'k', 'l']
    case '6': return ['m', 'n', 'o']
    case '7': return ['p', 'q', 'r', 's']
    case '8': return ['t', 'u', 'v']
    case '9': return ['w', 'x', 'y', 'z']
  }
}
var letterCombinations = function(digits) {
  if (!digits) return []
  const result = []
  const backtrack = (digits, s) => {
    if (!digits) {
      result.push(s)
      return
    }
    const options = getOptions(digits.charAt(0))
    for (const item of options) {
      backtrack(digits.substring(1), s + item)
    }
  }

  backtrack(digits, '')

  return result
};
// @lc code=end

