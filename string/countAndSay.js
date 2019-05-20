/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) return '1'

  let prev = countAndSay(n - 1)
  let i = 0
  let result = ''
  let current = ''
  let count = 0
  while (prev[i]) {
    if (current !== prev[i]) {
      result += count ? `${count}${current}` : ''
      current = prev[i]
      count = 1
    } else {
      count++
    }
    i++
  }
  result += count ? `${count}${current}` : ''
  return result;
}

var myCountAndSay = function(n) {
  const say = (result, n) => {
    if (n === 1) return result;
    let count = 0;
    let temp   = 0;
    let str = '';
    for (let i = 0; i < result.length; i++) {
      if (!temp || temp === result[i]) {
        temp = result[i];
        count++;
      } else {
        str += `${count}${temp}`;
        count = 1;
        temp = result[i];
      }
    }
    str += count ? `${count}${temp}` : '';
    return say(str, --n);
  }
  return say('1', n);
};

console.log(myCountAndSay(30))
