/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
  let count = 0
  const merge = (a, b) => {
    const aL = a.length
    const bL = b.length
    const result = []
    let i = 0
    let j = 0
  
    while (i < aL && j < bL) {
      if (a[i] <= b[j]) {
        result.push(a[i])
        i++
      } else {
        result.push(b[j])
        count += aL - i
        j++
      }
    }
  
    return i < aL ? result.concat(a.slice(i)) : result.concat(b.slice(j))
  }
  const sort = (nums) => {
    if (nums.length < 2) return nums
    const mid = nums.length >> 1
    const left = nums.slice(0, mid)
    const right = nums.slice(mid)
    return merge(sort(left), sort(right))
  }

  sort(nums)
  return count
};