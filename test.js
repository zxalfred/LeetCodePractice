var longestPalindrome = function(s) {
  const set = new Set()

  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      set.delete(s[i])
    } else {
      set.add(s[i])
    }
  }

  if (set.size === 0) {
    return s.length
  } else {
    return (s.length - set.size) + 1
  }
};

console.log(longestPalindrome("ab"))