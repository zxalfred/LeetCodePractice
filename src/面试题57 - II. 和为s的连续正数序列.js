/**
 * @param {number} target
 * @return {number[][]}
 */
const findContinuousSequence = function (target) {
  let i = 1
  let j = 2
  const result = []
  while (i < j) {
    const sum = (i + j) * (j - i + 1) / 2
    if (sum === target) {
      const item = []
      for (let a = i; a <= j; a++) {
        item.push(a)
      }
      result.push(item)
      i++
      j++
    } else if (sum < target) {
      j++
    } else {
      i++
    }
  }

  return result
}

console.log(findContinuousSequence(15))
