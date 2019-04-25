/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
  const isDuplicate = function(nums) {
    const map = {};
    for (let i of nums) {
      if (i !== '.') {
        if (map[i] === undefined) {
          map[i] = true;
        } else {
          return true;
        }
      }
    }
    return false;
  }

  for (let i = 0; i < 9; i++) {
    if (isDuplicate(board[i])) return false;
    const col = [];
    for (let j = 0; j < 9; j++) {
      const item = board[j][i];
      item !== '.' && col.push(item);
    }
    if (isDuplicate(col)) return false;
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const nums = [];
      for (let n = i * 3; n < i * 3 + 3; n++) {
        for (let m = j * 3; m < j * 3 + 3; m++) {
          const item = board[n][m]
          item !== '.' && nums.push(board[n][m]);
        }
      }
      if (isDuplicate(nums)) return false;
    }
  }

  return true;
};
