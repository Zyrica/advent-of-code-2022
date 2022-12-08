let cols, rows, heights;

export function task1(input) {
  cols = input.length;
  rows = input[0].length;
  heights = input.map(row => row.split(''));
  const visible = [];

  // default false
  for (let x = 0; x < cols; x++) {
    visible[x] = [];
    for (let y = 0; y < rows; y++) {
      visible[x][y] = false;
    }
  }
  // from left
  for (let y = 0; y < rows; y++) {
    let height = -1;
    for (let x = 0; x < cols; x++) {
      if (heights[x][y] > height) {
        visible[x][y] = true;
        height = heights[x][y];
      }
    }
  }

  // from right
  for (let y = 0; y < rows; y++) {
    let height = -1;
    for (let x = cols - 1; x >= 0; x--) {
      if (heights[x][y] > height) {
        visible[x][y] = true;
        height = heights[x][y];
      }
    }
  }

  // from top
  for (let x = 0; x < cols; x++) {
    let height = -1;
    for (let y = 0; y < rows; y++) {
      if (heights[x][y] > height) {
        visible[x][y] = true;
        height = heights[x][y];
      }
    }
  }

  // from bottom
  for (let x = 0; x < cols; x++) {
    let height = -1;
    for (let y = rows - 1; y >= 0; y--) {
      if (heights[x][y] > height) {
        visible[x][y] = true;
        height = heights[x][y];
      }
    }
  }

  let count = 0;

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      if (visible[x][y]) count++;
    }
  }


  return count;
}

export function task2(input) {
  let highScore = 0;

  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      const height = heights[x][y];

      // right
      let r = 0;
      while (true) {
        if (!heights[x + r + 1]) break;
        const h = heights[x + ++r][y];
        if (h >= height) break;
      }

      // left
      let l = 0;
      while (true) {
        if (!heights[x - l - 1]) break;
        const h = heights[x - ++l][y];
        if (h >= height) break;
      }

      // top
      let t = 0;
      while (true) {
        if (!heights[x][y - t - 1]) break;
        const h = heights[x][y - ++t];
        if (h >= height) break;
      }

      // bottom
      let b = 0;
      while (true) {
        if (!heights[x][y + b + 1]) break;
        const h = heights[x][y + ++b];
        if (h >= height) break;
      }
      const score = r * l * t * b;
      if (score > highScore) highScore = score;
    }
  }
  return highScore;
}
