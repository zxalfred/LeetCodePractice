var plusOne = function(digits) {
  let addFlag = true;
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] === 10) {
      digits[i] = 0;
      addFlag = true;
    } else {
      addFlag = false;
      break;
    }
  }
  if (addFlag) {
    digits.unshift(1);
  }
  return digits;
}

var oldPlusOne = function(digits, index = digits.length  - 1) {
  if (index >= 0) {
    const temp = digits[index];
    if (temp === 9) {
      digits[index] = 0;
      index--;
      return plusOne(digits, index, true);
    } else {
      digits[index] = temp + 1;
      return digits;
    }
  } else {
    digits.unshift(1);
    return digits;
  }
};
