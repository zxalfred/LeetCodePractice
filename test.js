var merge = function(left, right) {
  const result = []
  let i = 0
  let j = 0

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i])
      i++
    } else {
      result.push(right[j])
      j++
    }
  }

  if (i === left.length) {
    return result.concat(right.slice(j))
  } else {
    return result.concat(left.slice(i))
  }
}

var mergeSort = function(nums) {
  if (nums.length < 2) return nums
  const middle = nums.length >> 1
  const left = nums.slice(0, middle)
  const right = nums.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([4,234,1,2,9,10,3]))
