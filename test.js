var myPow = function(x, n) {
  if (n < 0) {
    x = 1 / x
    n = -n
  }
  pow = 1
  while (n) {
    if (n & 1) {
      pow *= x
    }
    x *= x
    n >>= 1
  }
  return pow
}

myPow(3, 6)