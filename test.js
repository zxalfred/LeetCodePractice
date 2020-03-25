var maxSlidingWindow = function(nums, k) {
  const window = []
  const result = []
  const l = nums.length
  
  for (let i = 0; i < l; i++) {
    if (window[0] + k <= i) window.shift()
    while (nums[window[window.length - 1]] < nums[i]) {
      window.pop()
    }
    window.push(i)
    if (i >= k - 1) {
      result.push(nums[window[0]])
    }
  }

  return result
}

maxSlidingWindow([1,3,1,2,0,5], 3)