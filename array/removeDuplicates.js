const removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j=1; j < nums.length; j++) {
    if (a[j] > a[i] && i != j) {
      a[i] = a[j];
      i++;
    }
  }
  return i + 1;
}

const oldRemoveDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  let j = 1;
  const len = nums.length;
  const max = nums[len - 1];
  while (nums[i] !== max) {
    while (j < len) {
      if (nums[j] > nums[i]) {
        nums[i + 1] = nums[j];
        j++;
        break;
      }
      j++;
    }
    i++;
  }
  return i + 1;
};
