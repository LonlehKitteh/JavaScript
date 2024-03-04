// Write a function that takes 2D array and shape, and tries to find this shape inside 2D array.

const array = [
  [1, 1, 0],
  [1, 1, 0],
  [1, 1, 0],
];

const shape = [
  [1, 1],
  [1, 1],
];

function findShape(array, shape) {
  const numRows = array.length;
  const numCols = array[0].length;
  const shapeRows = shape.length;
  const shapeCols = shape[0].length;

  for (let i = 0; i <= numRows - shapeRows; i++) {
    for (let j = 0; j <= numCols - shapeCols; j++) {
      let found = true;
      for (let si = 0; si < shapeRows; si++) {
        for (let sj = 0; sj < shapeCols; sj++) {
          if (array[i + si][j + sj] !== shape[si][sj]) {
            found = false;
            break;
          }
        }
        if (!found) break;
      }
      if (found) return true;
    }
  }
  return false;
}

console.log(findShape(array, shape));
