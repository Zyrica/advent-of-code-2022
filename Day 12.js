const heightFromChar = c =>
  c === 'S' ? 1 :
    c === 'E' ? 'z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1 :
      c.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

const findPos = (c, input) => {
  const rows = input.split('\n');
  for (let y = 0; y < rows.length; y++) {
    const column = rows[y];
    let x = column.indexOf(c);
    if (x >= 0) return {x, y};
  }
};

const parse = input => input.split('\n').map(s => s.split('').map(heightFromChar));

const fillDistances = (distances, heights, newSteps) => {
  while (newSteps.length) {
    const {x, y} = newSteps.shift();
    const currentHeight = heights[y][x];
    const currentDistance = distances[y][x];
    const newX = [x - 1, x + 1].filter(x => x >= 0 && x < heights[0].length).map(x => [x, y]);
    const newY = [y - 1, y + 1].filter(y => y >= 0 && y < heights.length).map(y => [x, y]);
    [...newX, ...newY].forEach(([x, y]) => {
      const h = heights[y][x];
      if (h <= currentHeight + 1 && (!distances[y] || distances[y][x] === undefined)) {
        if (!distances[y]) distances[y] = [];
        distances[y][x] = currentDistance + 1;
        newSteps.push({x, y});
      }
    });
  }
};

const task1 = input => {
  const heights = parse(input);
  const distances = [];
  const newSteps = [];
  const start = findPos('S', input);
  distances[start.y] = [];
  distances[start.y][start.x] = 0;
  newSteps.push(start);
  fillDistances(distances, heights, newSteps);

  const end = findPos('E', input);
  return distances[end.y][end.x];
};

const task2 = input => {
  const heights = parse(input);
  const distances = [];
  const newSteps = [];

  for (let x = 0; x < heights[0].length; x++) {
    for (let y = 0; y < heights.length; y++) {
      if (heights[y][x] === 1) {
        if (!distances[y]) distances[y] = [];
        distances[y][x] = 0;
        newSteps.push({x, y});
      }
    }
  }
  fillDistances(distances, heights, newSteps);

  const end = findPos('E', input);
  return distances[end.y][end.x];
};

const input = `abaaaaaccccccccccccccccccaaaaaaaaaaaaaccccaaaaaaaccccccccccccccccccccccccccccaaaaaa
abaaaaaaccaaaacccccccccccaaaaaaaaacaaaacaaaaaaaaaacccccccccccccccccccccccccccaaaaaa
abaaaaaacaaaaaccccccccccaaaaaaaaaaaaaaacaaaaaaaaaacccccccccccccaacccccccccccccaaaaa
abaaaaaacaaaaaacccccccccaaaaaaaaaaaaaaccaaacaaaccccccccccccccccaacccccccccccccccaaa
abccaaaccaaaaaacccaaaaccaaaaaaaaaaaaaccccaacaaacccccccccaacaccccacccccccccccccccaaa
abcccccccaaaaaccccaaaacccccaaaaacccaaaccaaaaaaccccccccccaaaaccccccccccccccccccccaac
abcccccccccaaaccccaaaacccccaaaaacccccccccaaaaaccccccccccklllllccccccccccccccccccccc
abcccccccccccccccccaaccccccccaaccccccccaaaaaaaccccccccckklllllllcccccddccccaacccccc
abaccccccccccccccccccccccccccaaccccccccaaaaaaaaccccccckkkklslllllcccddddddaaacccccc
abacccccccccccccccccccccccccccccccaaaccaaaaaaaaccccccckkkssssslllllcddddddddacccccc
abaccccccccccccccccccccccccccccccccaaaaccaaacaccccccckkksssssssslllmmmmmdddddaacccc
abcccccccccccccccaaacccccccccccccaaaaaaccaacccccccccckkkssssusssslmmmmmmmdddddacccc
abcccccccaaccccaaaaacccccccccccccaaaaaccccccaaaaaccckkkrssuuuussssqmmmmmmmmdddccccc
abcccccccaaccccaaaaaacccccccaaccccaaaaacccccaaaaacckkkkrruuuuuussqqqqqqmmmmdddccccc
abccccaaaaaaaacaaaaaacccccccaaaaccaaccaccccaaaaaacjkkkrrruuuxuuusqqqqqqqmmmmeeccccc
abcaaaaaaaaaaacaaaaaccccccaaaaaacccccaaccccaaaaajjjjrrrrruuuxxuvvvvvvvqqqmmmeeccccc
abcaacccaaaaccccaaaaaaacccaaaaacccacaaaccccaaaajjjjrrrrruuuxxxxvvvvvvvqqqmmeeeccccc
abaaaaccaaaaacccccccaaaccccaaaaacaaaaaaaacccaajjjjrrrrtuuuuxxxyvyyyvvvqqqnneeeccccc
abaaaaaaaaaaacccaaaaaaaccccaacaacaaaaaaaacccccjjjrrrttttuxxxxxyyyyyvvvqqnnneeeccccc
abaaaaaaaccaacccaaaaaaaaacccccccccaaaaaaccccccjjjrrrtttxxxxxxxyyyyyvvvqqnnneeeccccc
SbaaaaaacccccccccaaaaaaaaaccccccccaaaaacccccccjjjrrrtttxxxEzzzzyyyvvrrrnnneeecccccc
abaaaaacccccccccccaaaaaaacccccccccaaaaaaccccccjjjqqqtttxxxxxyyyyyvvvrrrnnneeecccccc
abaaacccccccccccaaaaaaaccaaccccccccccaaccaaaaajjjqqqttttxxxxyyyyyyvvrrrnnneeecccccc
abaaacccccccccccaaaaaaaccaaacaaacccccccccaaaaajjjjqqqtttttxxyywyyyywvrrnnnfeecccccc
abcaaacccccccaaaaaaaaaaacaaaaaaaccccccccaaaaaaciiiiqqqqtttxwyywwyywwwrrrnnfffcccccc
abcccccccccccaaaaaaaaaaccaaaaaacccccccccaaaaaacciiiiqqqqttwwywwwwwwwwrrrnnfffcccccc
abccccccccccccaaaaaacccaaaaaaaacccccccccaaaaaaccciiiiqqqttwwwwwswwwwrrrrnnfffcccccc
abccccccccccccaaaaaacccaaaaaaaaacccccccccaaacccccciiiqqqtswwwwssssrrrrrroofffcccccc
abccccccaaaaacaaaaaacccaaaaaaaaaaccccccccccccccccciiiqqqssswsssssssrrrrooofffaccccc
abccccccaaaaacaaccaaccccccaaacaaacccccccccccccccccciiiqqssssssspoorrrooooofffaacccc
abcccccaaaaaacccccccccccccaaacccccccccccccccccccccciiiqppssssspppooooooooffffaacccc
abcccccaaaaaacccccccccccccaacccccccccccccccccccccccciipppppppppppoooooooffffaaccccc
abcccccaaaaaaccccccccccccccccccccccccccccccccccccccciihppppppppgggggggggfffaaaccccc
abccccccaaacccccccccccccccccccccccaccccccccccccccccchhhhpppppphggggggggggfaaaaccccc
abaaaccccccccccccccccccccccaccccaaacccccccccccccccccchhhhhhhhhhgggggggggcaacccccccc
abaaccaaaccaccccccccccccccaaacccaaacaacccaaaaacccccccchhhhhhhhhgaaccccccccccccccccc
abaaacaaacaacccccccccaaaccaaaacaaaaaaaaccaaaaaccccccccchhhhhhaaaaacccccccccccccccca
abaaaccaaaaaccccccccccaaacaaaaaaaacaaaaccaaaaaaccccccccccaaacccaaaacccccccccccaccca
abcccaaaaaaccccccccccaaaaaaaaaaaaacaaaaccaaaaaaccccccccccaaaccccaaaccccccccccaaaaaa
abcccaaaaaaaacccccccaaaaaaaaaaaaaaaaaccccaaaaaacccccccccccccccccccccccccccccccaaaaa
abcccaacaaaaaccccccaaaaaaaaaaaaaaaaaaacccccaacccccccccccccccccccccccccccccccccaaaaa`;

console.log(task1(input));
console.log(task2(input));
