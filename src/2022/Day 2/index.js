export function task1(input) {
  return input.map(s => {
    const [opp, player] = s.split(' ');
    const isDraw =
      opp === 'A' && player === 'X' ||
      opp === 'B' && player === 'Y' ||
      opp === 'C' && player === 'Z';
    const isWin =
      opp === 'A' && player === 'Y' ||
      opp === 'B' && player === 'Z' ||
      opp === 'C' && player === 'X';

    const scoreMap = {
      X: 1,
      Y: 2,
      Z: 3,
    };

    let score = scoreMap[player];
    if (isDraw) score += 3;
    if (isWin) score += 6;
    return score;
  }).reduce((a, v) => a + v, 0);
}

export function task2(input) {
  return input.map(s => {
    const [opp, outcome] = s.split(' ');
    const scoreMap = {
      X: 0,
      Y: 3,
      Z: 6,
    };
    let score = scoreMap[outcome];

    switch (s) {
      case 'A Y':
      case 'B X':
      case 'C Z':
        score += 1;
        break;
      case 'B Y':
      case 'C X':
      case 'A Z':
        score += 2;
        break;

      default:
        score += 3;
        break;
    }

    return score;
  }).reduce((a, v) => a + v, 0);
}
