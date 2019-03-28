const rotate1 = function(nums, k) {
    const len = nums.length;
    k = k % len;
    if (k != 0) {
      while (k > 0) {
        nums.unshift(nums.pop());
        k--;
      }
    }
};

const rotate2 = function(nums, k) {
  const l = nums.length;
  k %= l;
  nums.unshift(...nums.splice(-k, k))
};

const rotate3 = function(nums, k) {
  const tmp = nums.splice(nums.length - k)
  nums.splice(0, 0, ...tmp)
};
