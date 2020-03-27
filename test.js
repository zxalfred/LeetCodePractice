var majorityElement = function(nums) {
  const l = nums.length
  const map = new Map()
  for (let i = 0; i < l; i++) {
    const val = nums[i]
    const count = map.get(val) || 0
    map.set(val, count + 1)
  }
  for (const [key, val] of map.entries()) {
    if (val > (l / 2)){
      return key
    }
  }
};

majorityElement([3, 2, 3])