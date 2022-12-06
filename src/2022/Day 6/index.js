let a;

export function task1(input) {
  a = input[0].split('');
  for (let i = 0; i < a.length; i++) {
    if ((new Set(a.slice(i, i + 4))).size === 4) return i + 4;
  }
}

export function task2(input) {
  for (let i = 0; i < a.length; i++) {
    if ((new Set(a.slice(i, i + 14))).size === 14) return i + 14;
  }
}
