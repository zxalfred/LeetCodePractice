// 1.交换律：a ^ b ^ c <=> a ^ c ^ b
// 2.任何数于0异或为任何数 0 ^ n => n
// 3.相同的数异或为0: n ^ n => 0

const singleNumber1 = function(nums) {
  const map = {};
  let result;
  for (let val of nums) {
    if (map[val] === undefined) {
      map[val] = false;
    } else {
      map[val] = true;
    }
  }
  const keyArr = Object.keys(map);
  for (let i of keyArr) {
    if (map[i] === false) {
      return i;
    }
  }
};

const singleNumber2 = function(nums) {
  return nums.reduce((result, item) => {
    return result ^ item;
  })
}
