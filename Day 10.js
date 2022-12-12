const parse = input => input.split('\n').map(s => s.split(' ')).flat().map(s => isNaN(s) ? 0 : Number(s));
const task1 = input => {
  const dx = parse(input);
  let x = 1;
  let strength = 0;
  for (let i = 0; i < dx.length; i++) {
    const cycle = i + 1;
    if ([20, 60, 100, 140, 180, 220].includes(cycle)) {
      strength += cycle * x;
    }
    x += dx[i];
  }
  return strength;
};
const task2 = input => {
  const dx = parse(input);
  let x = 1;
  let output = '\n';

  for (let i = 0; i < dx.length; i++) {
    const pixel = i % 40;

    output += Math.abs(pixel - x) > 1 ? ' ' : '#';

    if (pixel === 39) output += '\n';

    x += dx[i];
  }

  return output.slice(0, -1);
};


const input = `addx 1
addx 4
addx 1
noop
noop
addx 4
addx 1
addx 4
noop
noop
addx 5
noop
noop
noop
addx -3
addx 9
addx -1
addx 5
addx -28
addx 29
addx 2
addx -28
addx -7
addx 10
noop
noop
noop
noop
noop
addx -2
addx 2
addx 25
addx -18
addx 3
addx -2
addx 2
noop
addx 3
addx 2
addx 5
addx 2
addx 2
addx 3
noop
addx -15
addx 8
addx -28
noop
noop
noop
addx 7
addx -2
noop
addx 5
noop
noop
noop
addx 3
noop
addx 3
addx 2
addx 5
addx 2
addx 3
addx -2
addx 3
addx -31
addx 37
addx -28
addx -9
noop
noop
noop
addx 37
addx -29
addx 4
noop
addx -2
noop
noop
noop
addx 7
noop
noop
noop
addx 5
noop
noop
noop
addx 4
addx 2
addx 4
addx 2
addx 3
addx -2
noop
noop
addx -34
addx 6
noop
noop
noop
addx -4
addx 9
noop
addx 5
noop
noop
addx -2
noop
addx 7
noop
addx 2
addx 15
addx -14
addx 5
addx 2
addx 2
addx -32
addx 33
addx -31
addx -2
noop
noop
addx 1
addx 3
addx 2
noop
addx 2
noop
addx 7
noop
addx 5
addx -6
addx 4
addx 5
addx 2
addx -14
addx 15
addx 2
noop
addx 3
addx 4
noop
addx 1
noop
noop`;

console.log('Answer', task1(input));
console.log('Answer', task2(input));

