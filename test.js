var maxSlidingWindow = function(nums, k) {
  const result = []
  const window = []

  for (let i = 0; i < nums.length; i++) {
    if (window[0] + k <= i) window.shift()
    while (nums[window[window.length - 1]] < nums[i]) window.pop()
    window.push(i)
    if (i > k - 2)  {
      result.push(nums[window[0]])
    }
  }

  return result
}
