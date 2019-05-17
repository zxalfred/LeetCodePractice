/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const needleLength = needle.length;
  if (!needleLength || haystack === needle) return 0;
  const lengthDiff = haystack.length - needleLength;
  if (lengthDiff <= 0) return -1;
  for (let hIdx = 0; hIdx < lengthDiff + 1; hIdx++) {
    if (haystack[hIdx] === needle[0]
      && haystack.substr(hIdx, needleLength) === needle
    ) {
      return hIdx;
    }
  }
  return -1;
};