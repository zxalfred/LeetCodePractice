/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var partition = function(arr, left, right) {
  let i = left
  let j = right
  const baseVal = arr[right]

  while (i < j) {
    while (i < j && arr[i] <= baseVal) {
      i++
    }
    arr[j] = arr[i]
    while (i < j && arr[j] >= baseVal) {
      j--
    }
    arr[i] = arr[j]
  }
  arr[i] = baseVal
  return i
}


var getLeastNumbers = function(arr, k) {
  const len = arr.length
  if (k >= len) return arr
  let left = 0
  let right = len - 1
  let pos = partition(arr, left, right)

  while (pos !== k) {
    if (pos > k) {
      right = pos - 1
    } else {
      left = pos + 1
    }
    pos = partition(arr, left, right)
  }

  return arr.slice(0, pos)
};

console.log(getLeastNumbers([0,1,2,1], 1))