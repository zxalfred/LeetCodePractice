/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
  const len = S.length
  if (len < 2) return S
  let prevVal = null
  let prevCount = 0
  let index = 0
  let result = ''

  while (index < len) {
    const currVal = S[index]
    if (currVal !== prevVal) {
      result += prevCount || ''
      result += currVal
      prevVal = currVal
      prevCount = 1
    } else {
      prevCount++
    }
    index++
  }

  result += prevCount

  return result.length < S.length ? result : S
};