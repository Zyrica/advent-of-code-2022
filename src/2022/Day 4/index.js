export function task1(input) {
  return input.map(s => {
    const [s1, e1, s2, e2] = s.split(/,|-/).map(s => Number(s));
    return s1 <= s2 && e1 >= e2 || s2 <= s1 && e2 >= e1 ? 1 : 0;
  }).reduce((a, v) => a + v, 0);
}

export function task2(input) {
  return input.map(s => {
    const [s1, e1, s2, e2] = s.split(/,|-/).map(s => Number(s));
    const noOverlap = e1 < s2 || e2 < s1;
    return !noOverlap;
  }).reduce((a, v) => a + v, 0);
}
