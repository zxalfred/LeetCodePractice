const gcd = (a, b) => {
  if (b === 0) return a
  return gcd(b, a % b)
}

var gcdOfStrings = function(str1, str2) {
  const l1 = str1.length
  const l2 = str2.length

  const a = gcd(l1, l2)
  let slice = ''

  for (let i = 0; i < l1; i += a){
    if (!slice) {
      slice = str1.substr(i, a)
    } else if (str1.substr(i, a) !== slice) {
      return ''
    }
  }

  for (let i = 0; i < l2; i += a){
    if (str2.substr(i, a) !== slice) {
      return ''
    }
  }

  return slice
};

console.log(gcdOfStrings("LEET", "CODE"))