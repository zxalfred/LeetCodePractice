/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

var twoSum2 = function(nums, target) {
  const map = new Map();
  for (i in nums) {
    let num = target - nums[i];
    if (map.has(num)) {
      return [map.get(num), i];
    }
    map.set(nums[i], i);
  }
};
