var moveZeroes = function(nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== 0) i++;
    if (i !== j && nums[j] !== 0) {
      nums[i] = nums[sj];
      nums[j] = 0;
      i++;
    }
  }
  for (i++; i < nums.length; i++) {
    nums[i] = 0;
  }
};
