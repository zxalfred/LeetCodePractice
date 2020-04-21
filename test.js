var canThreePartsEqualSum = function(A) {
  const target = A.reduce((a, b) => a + b) / 3
  if (target % 1) return false
  const l = A.length
  let i = 0
  let sum = 0
  while (i < l) {
    sum += A[i]
    if (sum === target) {
      break
    }
    i++
  }
  sum = 0
  if (i >= l) return false
  i++
  while (i < l) {
    sum += A[i]
    if (sum === target) {
      break
    }
    i++
  }
  if (i >= l - 1) return false

  return true
};

console.log(canThreePartsEqualSum([1,-1,1,-1]))