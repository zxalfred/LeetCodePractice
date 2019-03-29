const intersect = function(nums1, nums2) {
  return nums1.filter((num) => {
    const index = nums2.indexOf(num);
    if (index === -1) return false;
    nums2.splice(index, 1)
    return true;
  })
}

const nums1 = [1,2,2,1];
const nums2 = [2,2];

console.log(intersect(nums1, nums2));
