var containsDuplicate = function(nums) {
  for (let i=0;i<nums.length - 1;i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

var containsDuplicate2 = function(nums) {
  const newNums = new Set(nums);
  return newNums.size !== nums.length;
}

var containsDuplicate3 = function(nums) {
  const map = {};
  for (let i of nums) {
    if (map[i] === undefined) {
      map[i] = true;
    } else {
      return true;
    }
  }
  return false;
}
