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


const rotate2 = function(matrix) {
  let abs1 = 0;
  let abs2 = matrix.length - 1;
  while(abs1 <= abs2) {
    let p1 = abs1;
    let p2 = abs2;
    while (p1 !== abs2) {
      const aux = matrix[abs1][p1];
      matrix[abs1][p1] = matrix[p2][abs1];
      matrix[p2][abs1] = matrix[abs2][p2];
      martix[abs2][p2] = matrix[p1][abs2];
      matrix[p1][abs2] = aux;
      p1++;
      p2--;
    }
    abs1++;
    abs2--;
  }
}
