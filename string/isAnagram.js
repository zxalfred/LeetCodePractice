/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  const sObj = {};
  const tObj = {};
  for (let i = 0; i < s.length; i++) {
    const val = sObj[s[i]];
    sObj[s[i]] = val ? val + 1 : 1;
  }
  for (let i = 0; i < t.length; i++) {
    const val = tObj[t[i]];
    tObj[t[i]] = val ? val + 1 : 1;
  }
  for (let key in sObj) {
    if (sObj[key] !== tObj[key]) return false;
  }
  return true;
};

isAnagram("anagram", "nagaram");
