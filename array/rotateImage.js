const rotate = function(matrix) {
  rotateColums(matrix);
  rotateDiagonal(matrix);
}

const rotateColums = function(matrix) {
  for (let j = 0; j < matrix.length; j++) {
    let floor = 0;
    let ceil = matrix.length - 1;
    while(low < ceil) {
      swap(matrix, low, j, ceil, j);
      low++;
      ceil--;
    }
  }
}

const rotateDiagonal = function(matrix) {
  for(let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      swap(matrix, i, j, j, i);
    }
  }
}

const swap = function(matrix, i1, j1, i2, j2) {
  const aux = matrix[i1][j1];
  matrix[i1][j1] = matrix[i2][j2];
  matrix[i2][j2] = aux;
}
