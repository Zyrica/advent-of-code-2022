function parseInput(input) {
  const i = input.indexOf('');
  const stackInput = input.splice(0, i);
  const moves = input;

  const stacks = {};
  const indexes = stackInput.pop().split(' ').filter(s => s).map(s => Number(s));
  indexes.forEach(index => {
    stacks[index] = [];
  });

  stackInput.reverse().forEach(row => {
    for (let index = 1; index <= indexes.length; index++) {
      const value = row[(index - 1) * 4 + 1];
      if (value && value !== ' ')
        stacks[index].push(value);
    }
  });

  return {stacks, moves, indexes};
}

export function task1(input) {
  const {stacks, moves, indexes} = parseInput(input);
  moves.forEach(s => {
    if (!s) return;
    const [amount, from, to] = s.split(/move | from | to /).filter(s => s).map(s => Number(s));
    for (let j = 0; j < amount; j++) {
      stacks[to].push(stacks[from].pop());
    }
  });

  return indexes.map(i => stacks[i].pop()).join('');
}

export function task2(input) {
  const {stacks, moves, indexes} = parseInput(input);
  moves.forEach(s => {
    if (!s) return;
    const [amount, from, to] = s.split(/move | from | to /).filter(s => s).map(s => Number(s));
    const move = stacks[from].splice(-amount);
    stacks[to] = stacks[to].concat(move);
  });

  return indexes.map(i => stacks[i].pop()).join('');
}
