var validMountainArray = function(A) {
  const l = A.length
  if (l < 2) return true

  let flag = 1

  for (let i = 1; i < l; i++) {
    const prev = A[i - 1]
    const now = A[i]
    const diff = (now - prev) * flag
    if (diff === 0) return false
    if (diff < 0) {
      if (flag > 0 && i > 1) {
        flag = -1
      } else {
        return false
      }
    }
  }
  return flag < 0
};

console.log(validMountainArray([0,3,2,1]))