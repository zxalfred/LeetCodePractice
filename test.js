var reverseWords = function(s) {
  s = s.trim()
  if (!s.length) return ''
  let result = []
  let item = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      item += s[i]
      if (i === s.length - 1) {
        result.push(item)
      }
    } else if (item) {
      result.push(item)
      item = ''
    }
  }

  result = result.reverse()

  return result.join(' ')
};

reverseWords("the sky is blue")