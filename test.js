var mySqrt = function(x) {
  if (x <= 3) return 1
  const help = function(target, left, right) {
    if (left - right <= 1) {
      return left ** 2 <= target ? left : right
    }
    const middle = (left + right) >> 1
    const val = middle ** 2
    if (val === target) {
      return middle
    } else if (val > target) {
      return help(target, middle, right)
    } else {
      return help(target, left, middle)
    }
  }

  return help(x, x >> 1, 1)
};

console.log(mySqrt(5))