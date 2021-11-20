/**
 * @param {number} n
 * @return {number}
 */
const fib = function (n) {
  if (n < 2) return n
  let a = 0
  let b = 1
  while (n > 1) {
    [a, b] = [b, a + b]
    n--
  }

  return b % 1000000007
}
