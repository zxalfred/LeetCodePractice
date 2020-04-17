var jump = function(nums) {
  let canJumpMax = 0
  let lastCanJumpMax = 0
  let step = 0
  const l = nums.length - 1
  for (let i = 0; i < l; i++) {
    canJumpMax = Math.max(canJumpMax, i + nums[i])
    if (lastCanJumpMax === i) {
      lastCanJumpMax = canJumpMax
      step++
    }
    if(lastCanJumpMax >= l){
      break;
    }
  }
  return step
};

jump([1,2,3])