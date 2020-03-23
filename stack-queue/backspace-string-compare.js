/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  const s = []
  const t = []
  for (let i = 0; !!S[i]; i++) {
    const val = S[i]
    if (val !== '#') {
      s.push(val)
    } else {
      s.pop()
    }
  }
  for (let i = 0; !!T[i]; i++) {
    const val = T[i]
    if (val !== '#') {
      t.push(val)
    } else {
      t.pop()
    }
  }

  return s.join('') === t.join('')
};