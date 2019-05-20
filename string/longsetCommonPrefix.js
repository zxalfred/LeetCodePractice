/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return ''
  if (strs.length === 1) return strs[0]
  let result = ''
  const baseStr = strs[0]
  for (let i = 0; i < baseStr.length; i++) {
    const prefix = baseStr[i]
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== prefix) return result
    }
    result += prefix
  }
  return result
};

console.log(longestCommonPrefix(["dog","racecar","car"]));
