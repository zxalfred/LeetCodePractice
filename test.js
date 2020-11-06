const lengthOfLongestSubstring = function(s) {
  let result = 0
  const map = new Map()
  const { length: l } = s

  for (let i = 0, j = 0; j < l; j++) {
    const val = s[j]
    const index = map.get(val)
    if (index === undefined || index < i) {
      result = Math.max(result, j - i + 1)
    } else {
      i = index + 1
    }
    map.set(val, j)
  }

  
  return result
}

console.log(lengthOfLongestSubstring('bbbbb'))
