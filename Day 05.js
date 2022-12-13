const parse = input => {
  input = input.split('\n');
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
};

const task1 = input => {
  const {stacks, moves, indexes} = parse(input);

  moves.forEach(s => {
    if (!s) return;
    const [amount, from, to] = s.split(/move | from | to /).filter(s => s).map(s => Number(s));
    for (let j = 0; j < amount; j++) {
      stacks[to].push(stacks[from].pop());
    }
  });

  return indexes.map(i => stacks[i].pop()).join('');
};

const task2 = input => {
  const {stacks, moves, indexes} = parse(input);

  moves.forEach(s => {
    if (!s) return;
    const [amount, from, to] = s.split(/move | from | to /).filter(s => s).map(s => Number(s));
    const move = stacks[from].splice(-amount);
    stacks[to] = stacks[to].concat(move);
  });

  return indexes.map(i => stacks[i].pop()).join('');
};

const input = `[J]             [F] [M]            
[Z] [F]     [G] [Q] [F]            
[G] [P]     [H] [Z] [S] [Q]        
[V] [W] [Z] [P] [D] [G] [P]        
[T] [D] [S] [Z] [N] [W] [B] [N]    
[D] [M] [R] [J] [J] [P] [V] [P] [J]
[B] [R] [C] [T] [C] [V] [C] [B] [P]
[N] [S] [V] [R] [T] [N] [G] [Z] [W]
 1   2   3   4   5   6   7   8   9 

move 2 from 4 to 6
move 1 from 9 to 5
move 3 from 2 to 4
move 8 from 4 to 7
move 2 from 9 to 7
move 3 from 8 to 3
move 2 from 1 to 2
move 5 from 7 to 9
move 1 from 9 to 4
move 1 from 8 to 3
move 1 from 3 to 4
move 2 from 4 to 9
move 7 from 3 to 5
move 6 from 1 to 8
move 11 from 7 to 9
move 12 from 5 to 3
move 6 from 6 to 9
move 3 from 3 to 8
move 4 from 2 to 7
move 3 from 5 to 7
move 1 from 5 to 7
move 2 from 2 to 5
move 1 from 5 to 2
move 5 from 8 to 9
move 7 from 7 to 2
move 3 from 8 to 7
move 1 from 8 to 9
move 4 from 3 to 6
move 1 from 5 to 1
move 9 from 9 to 6
move 7 from 9 to 6
move 20 from 6 to 5
move 12 from 9 to 8
move 5 from 5 to 1
move 3 from 7 to 4
move 6 from 2 to 7
move 2 from 3 to 1
move 4 from 3 to 8
move 1 from 4 to 1
move 7 from 7 to 5
move 4 from 8 to 2
move 3 from 6 to 2
move 3 from 2 to 9
move 4 from 1 to 7
move 2 from 1 to 2
move 3 from 9 to 5
move 11 from 8 to 5
move 1 from 6 to 9
move 1 from 8 to 5
move 1 from 1 to 2
move 24 from 5 to 4
move 2 from 1 to 6
move 11 from 5 to 4
move 2 from 7 to 9
move 1 from 6 to 2
move 4 from 2 to 1
move 28 from 4 to 2
move 1 from 7 to 8
move 9 from 2 to 5
move 2 from 9 to 6
move 4 from 4 to 2
move 1 from 7 to 4
move 3 from 4 to 7
move 1 from 6 to 9
move 21 from 2 to 3
move 3 from 1 to 6
move 5 from 6 to 2
move 7 from 2 to 3
move 1 from 9 to 3
move 1 from 8 to 4
move 1 from 7 to 8
move 3 from 5 to 8
move 1 from 1 to 7
move 2 from 7 to 9
move 2 from 8 to 4
move 1 from 9 to 2
move 1 from 8 to 6
move 11 from 3 to 4
move 1 from 7 to 8
move 6 from 5 to 9
move 2 from 8 to 7
move 1 from 6 to 5
move 7 from 3 to 8
move 9 from 3 to 6
move 1 from 8 to 3
move 1 from 7 to 4
move 2 from 3 to 5
move 4 from 5 to 7
move 4 from 6 to 8
move 2 from 7 to 9
move 11 from 4 to 2
move 1 from 4 to 2
move 6 from 8 to 9
move 1 from 7 to 1
move 1 from 3 to 7
move 3 from 7 to 8
move 6 from 8 to 9
move 6 from 4 to 8
move 18 from 9 to 3
move 1 from 5 to 8
move 5 from 6 to 5
move 6 from 8 to 1
move 3 from 5 to 4
move 1 from 9 to 8
move 3 from 4 to 8
move 15 from 3 to 6
move 2 from 5 to 9
move 3 from 3 to 1
move 9 from 6 to 4
move 2 from 1 to 5
move 2 from 5 to 8
move 6 from 4 to 2
move 6 from 1 to 6
move 3 from 4 to 6
move 6 from 9 to 1
move 4 from 2 to 1
move 7 from 8 to 1
move 1 from 6 to 7
move 17 from 1 to 5
move 1 from 7 to 1
move 5 from 2 to 1
move 1 from 8 to 6
move 11 from 6 to 4
move 2 from 2 to 3
move 3 from 1 to 8
move 7 from 2 to 5
move 4 from 6 to 7
move 4 from 1 to 5
move 15 from 5 to 9
move 2 from 3 to 7
move 2 from 8 to 2
move 1 from 1 to 9
move 6 from 2 to 6
move 7 from 5 to 6
move 5 from 7 to 3
move 1 from 6 to 1
move 2 from 3 to 4
move 1 from 3 to 4
move 5 from 6 to 4
move 14 from 9 to 2
move 1 from 8 to 9
move 1 from 7 to 8
move 1 from 9 to 6
move 2 from 9 to 5
move 1 from 1 to 2
move 7 from 6 to 9
move 1 from 3 to 4
move 8 from 5 to 2
move 1 from 6 to 7
move 1 from 7 to 4
move 1 from 8 to 4
move 1 from 3 to 9
move 7 from 9 to 5
move 1 from 9 to 1
move 6 from 5 to 1
move 8 from 2 to 4
move 1 from 5 to 6
move 1 from 6 to 7
move 1 from 7 to 9
move 7 from 2 to 9
move 1 from 9 to 4
move 3 from 9 to 1
move 1 from 9 to 6
move 11 from 2 to 8
move 9 from 1 to 8
move 1 from 6 to 4
move 1 from 1 to 9
move 12 from 4 to 2
move 4 from 9 to 3
move 3 from 4 to 6
move 9 from 8 to 6
move 12 from 4 to 9
move 8 from 6 to 3
move 8 from 2 to 7
move 11 from 3 to 4
move 2 from 2 to 7
move 2 from 6 to 1
move 1 from 2 to 3
move 2 from 6 to 2
move 3 from 2 to 6
move 2 from 1 to 6
move 1 from 6 to 1
move 1 from 6 to 4
move 2 from 6 to 3
move 1 from 6 to 5
move 4 from 3 to 8
move 12 from 4 to 5
move 5 from 9 to 7
move 3 from 8 to 7
move 1 from 9 to 1
move 3 from 8 to 2
move 13 from 5 to 6
move 1 from 2 to 9
move 13 from 6 to 7
move 7 from 9 to 6
move 2 from 4 to 6
move 1 from 8 to 6
move 1 from 1 to 6
move 1 from 2 to 9
move 1 from 2 to 3
move 12 from 7 to 9
move 7 from 8 to 4
move 1 from 1 to 3
move 2 from 7 to 9
move 15 from 7 to 4
move 8 from 6 to 3
move 1 from 8 to 9
move 1 from 7 to 2
move 10 from 3 to 5
move 6 from 5 to 9
move 1 from 2 to 8
move 1 from 5 to 8
move 2 from 8 to 9
move 10 from 4 to 9
move 20 from 9 to 6
move 1 from 7 to 6
move 4 from 9 to 3
move 1 from 5 to 9
move 4 from 4 to 9
move 8 from 9 to 7
move 2 from 5 to 1
move 7 from 4 to 3
move 8 from 3 to 2
move 6 from 9 to 8
move 1 from 3 to 7
move 1 from 3 to 1
move 7 from 7 to 8
move 13 from 8 to 3
move 2 from 2 to 8
move 1 from 8 to 2
move 1 from 4 to 1
move 1 from 1 to 8
move 2 from 8 to 2
move 24 from 6 to 2
move 2 from 7 to 8
move 5 from 3 to 4
move 25 from 2 to 6
move 5 from 4 to 9
move 2 from 8 to 7
move 2 from 7 to 3
move 4 from 6 to 2
move 2 from 6 to 4
move 9 from 2 to 3
move 11 from 3 to 7
move 10 from 7 to 8
move 1 from 7 to 9
move 3 from 2 to 4
move 8 from 8 to 2
move 1 from 2 to 6
move 2 from 4 to 1
move 1 from 8 to 2
move 1 from 6 to 9
move 1 from 8 to 3
move 6 from 9 to 7
move 2 from 9 to 1
move 9 from 6 to 8
move 7 from 2 to 3
move 7 from 8 to 2
move 10 from 6 to 8
move 7 from 1 to 2
move 9 from 3 to 2
move 5 from 3 to 8
move 4 from 7 to 2
move 2 from 3 to 2
move 12 from 2 to 3
move 6 from 4 to 2
move 1 from 7 to 6
move 5 from 3 to 5
move 16 from 8 to 4
move 12 from 2 to 7
move 5 from 5 to 7
move 1 from 8 to 3
move 1 from 6 to 4
move 17 from 7 to 4
move 1 from 7 to 1
move 1 from 1 to 9
move 1 from 9 to 5
move 11 from 4 to 9
move 10 from 2 to 3
move 1 from 5 to 4
move 1 from 9 to 2
move 2 from 2 to 1
move 1 from 2 to 3
move 23 from 4 to 5
move 7 from 9 to 7
move 3 from 9 to 1
move 20 from 5 to 6
move 3 from 5 to 8
move 1 from 4 to 1
move 2 from 8 to 3
move 4 from 6 to 4
move 7 from 7 to 2
move 1 from 8 to 4
move 19 from 3 to 9
move 5 from 1 to 7
move 7 from 2 to 6
move 3 from 7 to 5
move 2 from 3 to 4
move 1 from 5 to 4
move 1 from 1 to 4
move 1 from 7 to 6
move 13 from 6 to 7
move 6 from 9 to 3
move 1 from 3 to 5
move 2 from 3 to 4
move 2 from 6 to 2
move 3 from 4 to 3
move 8 from 9 to 1
move 2 from 2 to 1
move 8 from 6 to 7
move 2 from 9 to 4
move 20 from 7 to 1
move 2 from 7 to 5
move 2 from 5 to 1
move 8 from 1 to 8
move 8 from 8 to 6
move 1 from 6 to 9
move 8 from 6 to 1
move 1 from 5 to 3
move 7 from 3 to 2
move 1 from 5 to 2
move 2 from 9 to 7
move 1 from 5 to 8
move 18 from 1 to 4
move 1 from 8 to 9
move 3 from 2 to 3
move 2 from 7 to 4
move 5 from 2 to 4
move 3 from 3 to 8
move 8 from 1 to 7
move 2 from 9 to 2
move 32 from 4 to 5
move 1 from 9 to 7
move 1 from 2 to 1
move 6 from 1 to 6
move 1 from 2 to 4
move 3 from 8 to 1
move 3 from 6 to 5
move 1 from 3 to 6
move 2 from 1 to 9
move 4 from 4 to 7
move 31 from 5 to 4
move 4 from 5 to 6
move 1 from 6 to 1
move 7 from 6 to 5
move 1 from 9 to 4
move 19 from 4 to 2
move 1 from 5 to 9
move 5 from 5 to 6
move 3 from 4 to 2
move 2 from 7 to 1
move 4 from 7 to 8
move 3 from 8 to 6
move 2 from 6 to 7
move 6 from 7 to 8
move 3 from 1 to 5
move 4 from 5 to 9
move 15 from 2 to 1
move 4 from 6 to 4
move 2 from 6 to 3
move 1 from 3 to 7
move 4 from 1 to 2
move 1 from 3 to 4
move 2 from 7 to 4
move 5 from 9 to 3
move 2 from 7 to 3
move 16 from 4 to 8
move 8 from 8 to 5
move 2 from 1 to 5
move 1 from 9 to 6
move 1 from 6 to 5
move 7 from 5 to 9
move 3 from 1 to 8
move 1 from 8 to 4
move 8 from 2 to 7
move 3 from 1 to 3
move 1 from 3 to 9
move 2 from 4 to 2
move 7 from 8 to 5
move 7 from 9 to 1
move 6 from 3 to 5
move 6 from 7 to 4
move 3 from 4 to 1
move 3 from 2 to 5
move 1 from 7 to 8
move 1 from 7 to 5
move 1 from 9 to 8
move 2 from 2 to 4
move 15 from 1 to 6
move 8 from 5 to 9
move 3 from 3 to 4
move 4 from 4 to 3
move 1 from 9 to 7
move 6 from 9 to 4
move 1 from 9 to 2
move 6 from 4 to 9
move 2 from 4 to 6
move 5 from 6 to 9
move 1 from 3 to 1
move 8 from 6 to 8
move 12 from 5 to 3
move 1 from 5 to 3
move 1 from 3 to 8
move 4 from 6 to 1
move 11 from 3 to 8
move 1 from 2 to 1
move 23 from 8 to 2
move 3 from 1 to 2
move 1 from 1 to 9
move 2 from 2 to 3
move 6 from 3 to 6
move 1 from 7 to 6
move 1 from 4 to 7
move 1 from 4 to 3
move 1 from 7 to 3
move 4 from 8 to 4
move 2 from 1 to 8
move 3 from 8 to 1
move 4 from 6 to 2
move 7 from 9 to 1
move 1 from 9 to 6
move 2 from 2 to 3
move 3 from 9 to 4
move 1 from 9 to 3
move 10 from 2 to 8
move 16 from 2 to 5
move 2 from 3 to 6
move 6 from 1 to 8
move 1 from 1 to 5
move 8 from 8 to 5
move 11 from 5 to 9
move 2 from 1 to 8
move 1 from 1 to 8
move 4 from 4 to 6
move 3 from 3 to 9
move 14 from 9 to 3
move 15 from 8 to 5
move 9 from 5 to 4
move 7 from 6 to 1
move 1 from 6 to 3
move 4 from 4 to 7
move 2 from 6 to 2
move 4 from 7 to 4
move 4 from 1 to 4
move 10 from 4 to 3
move 14 from 3 to 6
move 5 from 4 to 1
move 6 from 5 to 7
move 1 from 2 to 6
move 3 from 7 to 2
move 2 from 2 to 3
move 3 from 7 to 8
move 2 from 8 to 2
move 2 from 2 to 7
move 6 from 6 to 2
move 1 from 8 to 7
move 8 from 2 to 7
move 1 from 4 to 1
move 5 from 5 to 3
move 3 from 3 to 2
move 5 from 1 to 3
move 7 from 5 to 8
move 6 from 6 to 3
move 1 from 5 to 9
move 10 from 7 to 9
move 26 from 3 to 4
move 1 from 5 to 1
move 6 from 8 to 2
move 9 from 2 to 9
move 1 from 7 to 5
move 1 from 8 to 5
move 2 from 6 to 2
move 20 from 9 to 6
move 1 from 1 to 6
move 1 from 4 to 2
move 1 from 5 to 8
move 1 from 5 to 7
move 3 from 1 to 3
move 1 from 3 to 6
move 12 from 4 to 8
move 11 from 4 to 5
move 1 from 7 to 5
move 1 from 2 to 8
move 1 from 1 to 8
move 2 from 2 to 5
move 8 from 6 to 2
move 5 from 6 to 4
move 2 from 5 to 3
move 12 from 8 to 4
move 5 from 2 to 6
move 3 from 8 to 1
move 11 from 6 to 8
move 10 from 4 to 6
move 5 from 4 to 6
move 12 from 6 to 5
move 22 from 5 to 6
move 3 from 6 to 5
move 3 from 8 to 5
move 1 from 3 to 8
move 4 from 8 to 1
move 6 from 1 to 7
move 5 from 6 to 9`;

console.log(task1(input));
console.log(task2(input));